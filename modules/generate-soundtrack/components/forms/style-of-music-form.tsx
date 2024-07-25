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
import React from "react";
import { z } from "zod";
import { useCompanyStore } from "@/modules/generate-logo/stores";
import MultipleSelectWithImages from "@/modules/generate-logo/components/multiple-select-with-image";
import PopRockOption from "@/public/poprock.webp";
import Emotional from "@/public/emotional.webp";
import Vocaloid from "@/public/vocaloid.webp";
import Jazz from "@/public/jazz.webp";
import Blues from "@/public/blues.webp";
import Country from "@/public/country.webp";
import OtherOption from "@/public/otherOption.webp";

interface StyleOfMusicFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StyleOfMusicForm({ setContinue }: StyleOfMusicFormProps) {
  const {
    styleOfMusic,
    setstyleOfMusic,
    setstyleOfMusicOther,
    styleOfMusicOther,
  } = useCompanyStore((state) => {
    return {
      styleOfMusic: state.styleOfMusic,
      setstyleOfMusic: state.setStyleOfMusic,
      styleOfMusicOther: state.styleOfMusicOther,
      setstyleOfMusicOther: state.setStyleOfMusicOther,
    };
  });

  const styleOfMusicSchema = z.object({
    styleOfMusic: z.array(z.string()).default(styleOfMusic),
    styleOfMusicOther: z.string().optional().default(styleOfMusicOther),
  });

  return (
    <AutoForm
      values={{ styleOfMusic: styleOfMusic }}
      fieldConfig={{
        styleOfMusic: {
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
                      value: "Classical",
                      image:
                        "https://professorcarol.com/wp-content/uploads/2023/02/Moonbeams-Music_450x650_CT_Spring_2022-150x150.jpeg",
                    },
                    {
                      value: "Alternative rock",
                      image:
                        "https://www.sonicliberty.com/m/royalty-free-music-library/alternative-rock.png",
                    },
                    {
                      value: "Pop rock",
                      image: PopRockOption.src,
                    },
                    {
                      value: "Emotional",
                      image: Emotional.src,
                    },
                    {
                      value: "Vocaloid",
                      image: Vocaloid.src,
                    },
                    {
                      value: "Jazz",
                      image: Jazz.src,
                    },
                    {
                      value: "Blues",
                      image: Blues.src,
                    },
                    {
                      value: "Country",
                      image: Country.src,
                    },
                    {
                      value: "Other",
                      image: OtherOption.src,
                    },
                  ]}
                  values={field.value}
                  onChange={setstyleOfMusic}
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
          sourceField: "styleOfMusic",
          targetField: "styleOfMusicOther",
          type: DependencyType.HIDES,
          when: (value) => !styleOfMusic.includes("Other"),
        },

        {
          sourceField: "styleOfMusic",
          targetField: "styleOfMusicOther",
          type: DependencyType.REQUIRES,
          when: (value) => value === "Other",
        },
      ]}
      onSubmit={(value) => {
        if (!value.styleOfMusic) {
          setContinue(false);
        } else {
          if (styleOfMusic.includes("Other") && value.styleOfMusicOther) {
            setstyleOfMusicOther(value.styleOfMusicOther);
          }
          setContinue(true);
        }
      }}
      formSchema={styleOfMusicSchema}
    />
  );
}
