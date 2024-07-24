"use client";
import AutoForm from "@/components/ui/auto-form";
import TecnologyOptionImage from "@/public/tecnologyOption.webp";
import HealcareOptionImage from "@/public/healthcareOption.webp";
import FinanceOptionImage from "@/public/financeOption.webp";
import RetailOptionImage from "@/public/retailOption.webp";
import FoodOptionImage from "@/public/foodOption.webp";
import EducationOptionImage from "@/public/educationOption.webp";
import TravelOptionImage from "@/public/travelOption.webp";
import AutomotivoOptionImage from "@/public/automotivoOption.webp";
import OtherOptionImage from "@/public/otherOption.webp";
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
import React from "react";
import { z } from "zod";
import SelectWithImages from "../select-with-image";
import { useCompanyStore } from "../../stores";

interface IndustryFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function IndustryForm({ setContinue }: IndustryFormProps) {
  const { setCompanyIndustry, industry, setIndustryOther, industryOther } =
    useCompanyStore((state) => {
      return {
        industry: state.Industry,
        setCompanyIndustry: state.setIndustry,
        setIndustryOther: state.setIndustryOther,
        industryOther: state.IndustryOther,
      };
    });

  const IndustryFormSchema = z.object({
    companyIndustry: z
      .string()
      .min(1, { message: "You need to select your company industry." })
      .default(industry),
    companyIndustryOther: z.string().optional().default(industryOther),
  });

  return (
    <AutoForm
      values={{ companyIndustry: industry }}
      onValuesChange={(values) => {
        if (values.companyIndustry) {
          setCompanyIndustry(values.companyIndustry);
        }
      }}
      fieldConfig={{
        companyIndustry: {
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
                      value: "Technology",
                      image: TecnologyOptionImage.src,
                    },
                    {
                      value: "Healthcare",
                      image: HealcareOptionImage.src,
                    },
                    {
                      value: "Finance",
                      image: FinanceOptionImage.src,
                    },
                    {
                      value: "Retail",
                      image: RetailOptionImage.src,
                    },
                    {
                      value: "Food and Beverage",
                      image: FoodOptionImage.src,
                    },
                    {
                      value: "Education",
                      image: EducationOptionImage.src,
                    },
                    {
                      value: "Travel and Hospitality",
                      image: TravelOptionImage.src,
                    },
                    {
                      value: "Automotive",
                      image: AutomotivoOptionImage.src,
                    },
                    {
                      value: "Other",
                      image: OtherOptionImage.src,
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
          sourceField: "companyIndustry",
          targetField: "companyIndustryOther",
          type: DependencyType.HIDES,
          when: (value) => value !== "Other",
        },

        {
          sourceField: "companyIndustry",
          targetField: "companyIndustryOther",
          type: DependencyType.REQUIRES,
          when: (value) => value === "Other",
        },
      ]}
      onSubmit={(value) => {
        if (!value.companyIndustry) {
          setContinue(false);
        } else {
          if (value.companyIndustry === "Other" && value.companyIndustryOther) {
            setIndustryOther(value.companyIndustryOther);
          }
          setContinue(true);
        }
      }}
      formSchema={IndustryFormSchema}
    />
  );
}
