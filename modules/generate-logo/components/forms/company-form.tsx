import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import { AutoFormInputComponentProps } from "@/components/ui/auto-form/types";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect } from "react";
import * as z from "zod";
import { useCompanyStore } from "../../stores";

export const CompanyFormSchema = z.object({
  companyName: z
    .string({ required_error: "Company name is required" })
    .min(2, {
      message: "Company name must be at least 2 characters long",
    })
    .describe("Enter the name of your company"),
});

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CompanyForm({ setContinue }: CompanyFormProps) {
  const { setName } = useCompanyStore((state) => {
    return {
      setName: state.setName,
    };
  });

  return (
    <AutoForm
      onSubmit={(value) => {
        if (!value.companyName) {
          setContinue(false);
        } else {
          setName(value.companyName);
          setContinue(true);
        }
      }}
      fieldConfig={{
        companyName: {
          fieldType: ({
            field,
            label,
            isRequired,
            fieldConfigItem,
          }: AutoFormInputComponentProps) => (
            <FormItem className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full">
              <FormLabel htmlFor="company-name">
                <span className="text-2xl text-center">{label}</span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  id="company-name"
                  className="border-2"
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
      formSchema={CompanyFormSchema}
    />
  );
}
