import { ContentLayout } from "@/components/content-layout";
import { LogoIconsCloud } from "@/components/logos-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <ContentLayout title="Home">
      <div className="w-full relative flex flex-col items-center justify-center md:h-[42rem]  antialiased">
        <div className="max-w-4xl mx-auto space-y-8  text-center">
          <h1 className="md:text-5xl text-2xl font-bold text-black dark:text-neutral-200 mb-4">
            Create Your Brand&apos;s Identity with AI
          </h1>
          <LogoIconsCloud />
          <p className="text-black dark:text-neutral-200 text-lg mx-auto my-4 max-w-3xl">
            Welcome to the future of branding. Generate unique logos and bespoke
            soundtracks for your business in minutes with the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className=" text-blue-800 bg-gray-100 border border-black hover:bg-blue-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 px-6 py-3 rounded-md font-medium">
              <Link href={"/generate-logo"}>Generate your Logo</Link>
            </Button>
            <Button className=" text-blue-800 bg-gray-100 border border-black hover:bg-blue-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 px-6 py-3 rounded-md font-medium">
              <Link href={"/generate-soundtrack"}>
                Generate your Soundtrack
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
