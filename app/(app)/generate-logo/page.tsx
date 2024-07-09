"use client";
import { ContentLayout } from "@/components/content-layout";
import { AutoFormSubmit } from "@/components/ui/auto-form";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { multiModalType } from "@/components/ui/step-form/form-types";
import MultiStepForm from "@/components/ui/step-form/multi-step-form";
import { BrandAttributeForm } from "@/modules/generate-logo/components/brand-attributes";
import { CompanyForm } from "@/modules/generate-logo/components/company-form";
import { SegmentForm } from "@/modules/generate-logo/components/segment-form";
import Link from "next/link";
import React from "react";

export default function App() {
  const [canContinue, setCanContinue] = React.useState(false);

  const [orderedForm, setGoToForm] = React.useState<number | undefined>();

  const Forms: multiModalType = [
    {
      formLabel: "Your company name",
      form: <CompanyForm setContinue={setCanContinue} />,
    },
    {
      formLabel: "Your company segment",
      form: <SegmentForm setContinue={setCanContinue} />,
    },
    {
      formLabel: "Your brand attributes",
      form: <BrandAttributeForm setContinue={setCanContinue} />,
    },
  ];
  return (
    <ContentLayout title="Generate your logo">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Logo</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-[calc(80dvh)] items-center justify-center pt-4 w-full">
        <MultiStepForm
          Forms={Forms}
          continueState={[canContinue, setCanContinue]}
          goToForm={orderedForm}
          setGoToForm={setGoToForm}
          disableControls={false}
        />
      </div>
    </ContentLayout>
  );
}
