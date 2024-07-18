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
import { useMutation } from "@tanstack/react-query";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { useCompanyStore } from "@/modules/generate-logo/stores";
import MultipleSelectWithImages from "@/modules/generate-logo/components/multiple-select-with-image";
import { createSoundTrack } from "@/http/create-soundtrack";
import { SoundtrackResultModal } from "../soundtrack-result-modal";

type ResponseGeneratedSoundtrack = {
  audio_url: string;
};

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

const loadingStates = [
  {
    text: "Composing your melody",
  },
  {
    text: "Finding the perfect beat",
  },
  {
    text: "Mixing harmonies",
  },
  {
    text: "Layering the tracks",
  },
  {
    text: "Balancing the volumes",
  },
  {
    text: "Adding rhythm",
  },
  {
    text: "Refining the tempo",
  },
  {
    text: "Tuning the instruments",
  },
  {
    text: "Creating transitions",
  },
  {
    text: "Incorporating effects",
  },
  {
    text: "Finalizing the mix",
  },
  {
    text: "Polishing the sound",
  },
  {
    text: "Mastering the track",
  },
  {
    text: "Reviewing the composition",
  },
  {
    text: "Your soundtrack is ready! 🎶",
  },
];

export function BrandAttributeForm({ setContinue }: CompanyFormProps) {
  const {
    mutate,
    isPending,
    isError,
    data: responseGeneratedSoundtrack,
  } = useMutation({
    mutationFn: createSoundTrack,
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
  if (responseGeneratedSoundtrack) {
    console.log("responseGeneratedSoundtrack:", responseGeneratedSoundtrack);
    return (
      <SoundtrackResultModal
        open={!isPending}
        companyName={companyName}
        soundUrl={
          (responseGeneratedSoundtrack as ResponseGeneratedSoundtrack).audio_url
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
          mutate({ brandAttributes, companyName, companyIndustry });
        }
      }}
      formSchema={BrandAttributeSchema}
    />
  );
}
