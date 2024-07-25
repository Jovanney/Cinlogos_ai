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
import { createSoundTrack } from "@/http/create-soundtrack";
import { SoundtrackResultModal } from "../soundtrack-result-modal";
import MaleSinger from "@/public/maleSinger.webp";
import FemaleSinger from "@/public/femaleSingerOption.webp";

import TagCardOption from "../tag-card-option";

type ResponseGeneratedSoundtrack = {
  audio_url: string;
};

interface TagsFormProps {
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
  {
    text: "Analyzing the waveform",
  },
  {
    text: "Enhancing the bass",
  },
  {
    text: "Optimizing the treble",
  },
  {
    text: "Synchronizing the beats",
  },
  {
    text: "Applying reverb",
  },
  {
    text: "Equalizing frequencies",
  },
  {
    text: "Compressing the dynamics",
  },
  {
    text: "Normalizing the audio",
  },
  {
    text: "Rendering the final output",
  },
  {
    text: "Your soundtrack is almost ready!",
  },
];

export function TagsForm({ setContinue }: TagsFormProps) {
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

  const { brandAttributes, companyName, companyIndustry, tags, setTags } =
    useCompanyStore((state) => {
      return {
        brandAttributes: state.Attributes,
        companyName: state.Name,
        companyIndustry: state.Industry,
        tags: state.tags,
        setTags: state.setTags,
      };
    });

  const TagsSchema = z.object({
    tags: z
      .string()
      .min(2, { message: "You should select an option" })
      .default(tags),
  });

  if (isPending)
    return (
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={isPending}
        duration={1000}
      />
    );
  if (Array.isArray(responseGeneratedSoundtrack)) {
    console.log("responseGeneratedSoundtrack:", responseGeneratedSoundtrack);
    return (
      <SoundtrackResultModal
        open={!isPending}
        companyName={companyName}
        soundUrl={
          (responseGeneratedSoundtrack[0] as ResponseGeneratedSoundtrack)
            .audio_url
        }
      />
    );
  }

  if (isError) return <div>Error</div>;

  return (
    <AutoForm
      values={{ tags: tags }}
      fieldConfig={{
        tags: {
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
                <span className="text-2xl text-center">Your Singer</span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <div className="flex items-center justify-center gap-5 pt-2">
                  <TagCardOption
                    title={"Female singer"}
                    description={""}
                    image={FemaleSinger.src}
                    onChange={setTags}
                    selectedOption={tags}
                    value={"female singer"}
                  />
                  <TagCardOption
                    title={"Male singer"}
                    description={""}
                    image={MaleSinger.src}
                    selectedOption={tags}
                    onChange={setTags}
                    value={"male singer"}
                  />
                </div>
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
        if (!value.tags) {
          setContinue(false);
        } else {
          mutate({ brandAttributes, companyName, companyIndustry, tags });
        }
      }}
      formSchema={TagsSchema}
    />
  );
}
