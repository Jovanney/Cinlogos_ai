import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";
import React from "react";
import * as z from "zod";

const form1Schema = z.object({
  companyName: z.string({ required_error: "Company name is required" }).min(2, {
    message: "Company name must be at least 2 characters long",
  }),
});

interface Form1Props {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Form1({ setContinue }: Form1Props) {
  return (
    <AutoForm
      onSubmit={(value) => {
        console.log("value:", value);

        if (!value.companyName) {
          setContinue(false);
        } else {
          setContinue(true);
        }
      }}
      formSchema={form1Schema}
    >
      <AutoFormSubmit>Send now</AutoFormSubmit>
    </AutoForm>
  );
}
