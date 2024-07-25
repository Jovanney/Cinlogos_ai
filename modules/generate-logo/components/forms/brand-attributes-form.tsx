"use client";

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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createLogo } from "@/http/create-logo";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { LogoResultModal } from "../logo-result-image";
import OtherImage from "@/public/otherOption.webp";
import Professional from "@/public/professional.webp";
import Innovative from "@/public/innovative.webp";
import Trustworthy from "@/public/trustworthy.webp";
import Fun from "@/public/fun.webp";
import Elegant from "@/public/elegant.webp";
import Adventurous from "@/public/adventurous.webp";
import Friendly from "@/public/friendly.webp";
import Sustentable from "@/public/sustentable.webp";

type ResponseGeneratedLogoType = {
  output_url: string;
};

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

const loadingStates = [
  {
    text: "Sketching your logo",
  },
  {
    text: "Mixing colors",
  },
  {
    text: "Adding finishing touches",
  },
  {
    text: "Polishing your logo",
  },
  {
    text: "Almost there!",
  },
  {
    text: "Adding final touches",
  },
  {
    text: "Your logo is ready! 🎉",
  },
  {
    text: "Welcome to your new logo!",
  },
];

export function BrandAttributeForm({ setContinue }: CompanyFormProps) {
  const {
    mutate,
    isPending,
    isError,
    data: responseGeneratedLogo,
  } = useMutation({
    mutationFn: createLogo,
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });

  const { brandAttributes, setBrandAttributes, companyName, companyIndustry } =
    useCompanyStore((state) => {
      return {
        brandAttributes: state.Attributes,
        setBrandAttributes: state.setAttributes,
        companyName: state.Name,
        companyIndustry: state.Industry,
      };
    });

  const BrandAttributeSchema = z.object({
    brandAttributes: z.array(z.string()).default(brandAttributes),
  });

  if (isPending)
    return (
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={isPending}
        duration={1000}
      />
    );
  if (responseGeneratedLogo) {
    return (
      <LogoResultModal
        open={!isPending}
        companyName={companyName}
        imageUrl={
          (responseGeneratedLogo as ResponseGeneratedLogoType).output_url
        }
      />
    );
  }

  if (isError) return <div>Error</div>;

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
                <span className="text-2xl text-center">
                  Brand Personalities
                </span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <MultipleSelectWithImages
                  options={[
                    {
                      value: "Professional",
                      image: Professional.src,
                    },
                    {
                      value: "Innovative",
                      image: Innovative.src,
                    },
                    {
                      value: "Trustworthy",
                      image: Trustworthy.src,
                    },
                    {
                      value: "Fun",
                      image: Fun.src,
                    },
                    {
                      value: "Elegant",
                      image: Elegant.src,
                    },
                    {
                      value: "Adventurous",
                      image: Adventurous.src,
                    },
                    {
                      value: "Friendly",
                      image: Friendly.src,
                    },
                    {
                      value: "Sustentable",
                      image: Sustentable.src,
                    },
                    {
                      value: "Other",
                      image: OtherImage.src,
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
          mutate({ brandAttributes, companyName, companyIndustry });
        }
      }}
      formSchema={BrandAttributeSchema}
    />
  );
}
