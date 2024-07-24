"use client";
import { ContentLayout } from "@/components/content-layout";
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
import { CompanyForm } from "@/modules/generate-logo/components/forms/company-form";
import { IndustryForm } from "@/modules/generate-logo/components/forms/industry-form";
import { useCompanyStore } from "@/modules/generate-logo/stores";
import { BrandAttributeForm } from "@/modules/generate-soundtrack/components/forms/brand-attributes-form";
import { TagsForm } from "@/modules/generate-soundtrack/components/forms/tags-form";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const [canContinue, setCanContinue] = React.useState(false);
  const searchParams = useSearchParams();
  const fromPage = searchParams.get("from");
  const [orderedForm, setGoToForm] = React.useState<number | undefined>(
    fromPage ? 4 : undefined
  );
  const reset = useCompanyStore((state) => state.resetCompanyStore);

  useEffect(() => {
    if (!fromPage) {
      reset();
    }
  }, []);

  const Forms: multiModalType = [
    {
      formLabel: "Your company name",
      form: <CompanyForm setContinue={setCanContinue} />,
    },
    {
      formLabel: "Your company industry",
      form: <IndustryForm setContinue={setCanContinue} />,
    },
    {
      formLabel: "Your brand attributes",
      form: <BrandAttributeForm setContinue={setCanContinue} />,
    },
    {
      formLabel: "Your singer",
      form: <TagsForm setContinue={setCanContinue} />,
    },
  ];
  return (
    <ContentLayout title="Generate your soundtrack">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {fromPage && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={fromPage}>Logo</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>SoundTrack</BreadcrumbPage>
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
