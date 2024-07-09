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
import { Form1 } from "@/modules/generate-logo/components/form1";
import Link from "next/link";
import React from "react";

export default function App() {
  const [canContinue, setCanContinue] = React.useState(false);

  const [orderedForm, setGoToForm] = React.useState<number | undefined>();

  console.log("canContinue:", canContinue);

  const Forms: multiModalType = [
    { formLabel: "Teste", form: <Form1 setContinue={setCanContinue} /> },
    { formLabel: "Teste 2", form: <Form1 setContinue={setCanContinue} /> },
    { formLabel: "Teste 3", form: <Form1 setContinue={setCanContinue} /> },
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
      <MultiStepForm
        Forms={Forms}
        continueState={[canContinue, setCanContinue]}
        goToForm={orderedForm}
        setGoToForm={setGoToForm}
        disableControls={false}
      />
    </ContentLayout>
  );
}
