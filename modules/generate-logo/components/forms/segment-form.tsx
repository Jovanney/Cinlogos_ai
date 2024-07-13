"use client";
import AutoForm from "@/components/ui/auto-form";
import {
  AutoFormInputComponentProps,
  DependencyType,
} from "@/components/ui/auto-form/types";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useEffect } from "react";
import { z } from "zod";
import SelectWithImages from "../select-with-image";
import { useCompanyStore } from "../../stores";

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

const SegmentFormSchema = z.object({
  companySegment: z
    .string()
    .min(1, { message: "You need to select a company segment." }),
  companySegmentOther: z.string().optional(),
});

export function SegmentForm({ setContinue }: CompanyFormProps) {
  const { setCompanySegment, company } = useCompanyStore((state) => {
    return {
      company: state.Segment,
      setCompanySegment: state.setSegment,
    };
  });

  return (
    <AutoForm
      values={{ companySegment: company }}
      onValuesChange={(values) => {
        if (values.companySegment) {
          setCompanySegment(values.companySegment);
        }
      }}
      fieldConfig={{
        companySegment: {
          fieldType: ({
            field,
            label,
            isRequired,
            fieldConfigItem,
          }: AutoFormInputComponentProps) => (
            <FormItem
              id="company-segment"
              className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full"
            >
              <FormLabel htmlFor="company-segment">
                <span className="text-2xl text-center">{label}</span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <SelectWithImages
                  options={[
                    {
                      value: "Restaurant",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Consulting",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Beauty",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Photography",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Mock",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Mock 2",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Mock 3",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Mock 4",
                      image: "https://via.placeholder.com/150",
                    },
                    {
                      value: "Mock 5",
                      image: "https://via.placeholder.com/150",
                    },
                  ]}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                {fieldConfigItem.description && (
                  <FormDescription>
                    {fieldConfigItem.description}
                  </FormDescription>
                )}
              </div>
              <FormMessage />
            </FormItem>
          ),
        },
      }}
      dependencies={[
        {
          sourceField: "companySegment",
          targetField: "companySegmentOther",
          type: DependencyType.HIDES,
          when: (value) => value !== "Other",
        },

        {
          sourceField: "companySegment",
          targetField: "companySegmentOther",
          type: DependencyType.REQUIRES,
          when: (value) => value === "Other",
        },
      ]}
      onSubmit={(value) => {
        if (!value.companySegment) {
          setContinue(false);
        } else {
          setContinue(true);
        }
      }}
      formSchema={SegmentFormSchema}
    />
  );
}
