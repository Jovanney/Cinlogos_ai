import AutoForm from "@/components/ui/auto-form";
import { DependencyType } from "@/components/ui/auto-form/types";
import React from "react";
import { z } from "zod";

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

const SegmentFormSchema = z.object({
  companySegment: z.enum(
    ["Restaurant", "Consulting", "Beauty", "Photography", "Other"],
    {
      required_error: "You need to select a notification type.",
    }
  ),
  companySegmentOther: z.string().optional(),
});

export function SegmentForm({ setContinue }: CompanyFormProps) {
  return (
    <AutoForm
      fieldConfig={{
        companySegment: {
          fieldType: "radio",
        },
      }}
      dependencies={[
        {
          sourceField: "companySegment",
          targetField: "companySegmentOther",
          type: DependencyType.HIDES,
          when: (value) => value !== "Other",
        },

        {
          sourceField: "companySegment",
          targetField: "companySegmentOther",
          type: DependencyType.REQUIRES,
          when: (value) => value === "Other",
        },
      ]}
      onSubmit={(value) => {
        if (!value.companySegment) {
          setContinue(false);
        } else {
          setContinue(true);
        }
      }}
      formSchema={SegmentFormSchema}
    />
  );
}
