"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ThreeDCardDemoProps {
  imageSrc: string;
  title: string;
  ia: string;
  prompt: string;
}

export function ThreeDCardLogo({
  title,
  ia,
  imageSrc,
  prompt,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card max-w-[400px]  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem]  rounded-xl p-6 border h-fit">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {ia}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            priority
            src={imageSrc}
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 pb-3"
        >
          {prompt}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
