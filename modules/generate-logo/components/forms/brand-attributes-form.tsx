import AutoForm from "@/components/ui/auto-form";
import { AutoFormInputComponentProps } from "@/components/ui/auto-form/types";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { z } from "zod";
import MultipleSelectWithImages from "../multiple-select-with-image";
import { useCompanyStore } from "../../stores";

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BrandAttributeForm({ setContinue }: CompanyFormProps) {
  const { brandAttributes, setBrandAttributes } = useCompanyStore((state) => {
    return {
      brandAttributes: state.Attributes,
      setBrandAttributes: state.setAttributes,
    };
  });

  const BrandAttributeSchema = z.object({
    brandAttributes: z.array(z.string()).default(brandAttributes),
  });

  return (
    <AutoForm
      values={{ brandAttributes: brandAttributes }}
      fieldConfig={{
        brandAttributes: {
          fieldType: ({
            field,
            label,
            isRequired,
            fieldConfigItem,
          }: AutoFormInputComponentProps) => (
            <FormItem
              id="brand-attributes"
              className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full"
            >
              <FormLabel htmlFor="brand-attributes">
                <span className="text-2xl text-center">{label}</span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <MultipleSelectWithImages
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
                  values={field.value}
                  onChange={setBrandAttributes}
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
      onSubmit={(value) => {
        if (!value.brandAttributes) {
          setContinue(false);
        } else {
          setContinue(true);
        }
      }}
      formSchema={BrandAttributeSchema}
    />
  );
}
