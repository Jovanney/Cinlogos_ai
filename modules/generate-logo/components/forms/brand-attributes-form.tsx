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
} from "@/components/ui/form";
import React from "react";
import { object, z } from "zod";
import SelectWithImages from "../select-with-image";

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

const BrandAttributeSchema = z.object({
  brandAttributes: z.array(z.enum(["oi"])).nonempty(),
});

export function BrandAttributeForm({ setContinue }: CompanyFormProps) {
  return (
    <AutoForm
      fieldConfig={{
        brandAttributes: {
          // fieldType: ({
          //   field,
          //   label,
          //   isRequired,
          //   fieldConfigItem,
          //   fieldProps,
          // }: AutoFormInputComponentProps) => {
          //   console.log("field.onChange:", field.onChange);
          //   return (
          //     <FormItem className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full">
          //       <FormLabel>
          //         <span className="text-2xl text-center">{label}</span>
          //         {isRequired && (
          //           <span className="text-destructive dark:text-red-500">
          //             {" "}
          //             *
          //           </span>
          //         )}
          //       </FormLabel>
          //       <FormControl>
          //         <SelectWithImages
          //           options={[
          //             {
          //               value: "Consistency",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Innovation",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Passion",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Credibility",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Uniqueness",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Sustanability",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Authenticity",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Brand",
          //               image: "https:via.placeholder.com/150",
          //             },
          //             {
          //               value: "Accountability",
          //               image: "https:via.placeholder.com/150",
          //             },
          //           ]}
          //           value={field.value}
          //           onChange={field.onChange}
          //         />
          //       </FormControl>
          //       <div className="space-y-1 leading-none">
          //         {fieldConfigItem.description && (
          //           <FormDescription>
          //             {fieldConfigItem.description}
          //           </FormDescription>
          //         )}
          //       </div>
          //     </FormItem>
          //   );
          // },
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
