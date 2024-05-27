import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-800 dark:bg-secondary relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Welcome to the CinLogos AI <br /> Get{" "}
          <FlipWords words={["Perfects", "Moderns", "Professionals"]} /> Logos
        </div>

        <p className="dark:text-neutral-400 text-gray-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          CinLogos AI is a platform that allows you to create logos for your
          company or brand in a simple and fast way. Just enter the name of your
          company or brand and we will generate a logo for you.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
