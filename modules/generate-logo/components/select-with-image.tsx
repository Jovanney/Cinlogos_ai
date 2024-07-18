import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface SelectWithImagesProps {
  options: { value: string; image: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function SelectWithImages({
  options,
  value,
  onChange,
}: SelectWithImagesProps) {
  const { theme } = useTheme();
  return (
    <div className="grid justify-center items-center grid-cols-3 w-full h-full gap-5 ">
      {options.map((option) => (
        <MagicCard
          onClick={() => onChange(option.value)}
          key={option.value}
          className={`cursor-pointer hover:border-blue-300  shadow-2xl text-2xl ${
            option.value === value
              ? "dark:border-blue-200 border-blue-500 border-2"
              : "border-transparent"
          }`}
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          <span className="flex items-end gap-2 justify-start w-full ">
            <Image
              className="bg-white"
              width={150}
              height={150}
              src={option.image}
              alt={option.value}
            />
            {option.value}
          </span>
        </MagicCard>
      ))}
    </div>
  );
}
