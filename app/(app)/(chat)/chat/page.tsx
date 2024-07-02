import { cookies } from "next/headers";
import { ChatLayout } from "@/modules/chat/components/chat-layout";

export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4  gap-4">
      <div className="z-10 border rounded-lg  w-full max-w-7xl h-full text-sm lg:flex">
        <ChatLayout />
      </div>
    </main>
  );
}
