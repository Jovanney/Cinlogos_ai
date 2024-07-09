import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import React from "react";
import * as z from "zod";

const CompanyFormSchema = z.object({
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
  return (
    <AutoForm
      onSubmit={(value) => {
        if (!value.companyName) {
          setContinue(false);
        } else {
          setContinue(true);
        }
      }}
      formSchema={CompanyFormSchema}
    />
  );
}
