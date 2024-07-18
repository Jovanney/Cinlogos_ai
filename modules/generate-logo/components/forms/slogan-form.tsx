"use client";
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
import React from "react";
import * as z from "zod";
import { useCompanyStore } from "../../stores";

interface SloganFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SloganForm({ setContinue }: SloganFormProps) {
  const { setSlogan, slogan } = useCompanyStore((state) => {
    return {
      setSlogan: state.setSlogan,
      slogan: state.Slogan,
    };
  });

  const SloganFormSchema = z.object({
    slogan: z
      .string()
      .describe("Enter the slogan of your company")
      .optional()
      .default(slogan ? slogan : ""),
  });

  return (
    <AutoForm
      values={{ slogan: slogan }}
      onSubmit={(value) => {
        setSlogan(value.slogan);
        setContinue(true);
      }}
      fieldConfig={{
        slogan: {
          fieldType: ({
            field,
            label,
            isRequired,
            fieldConfigItem,
          }: AutoFormInputComponentProps) => (
            <FormItem className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full">
              <FormLabel htmlFor="company-name">
                <span className="text-2xl text-center">{label}</span>
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
      formSchema={SloganFormSchema}
    />
  );
}
