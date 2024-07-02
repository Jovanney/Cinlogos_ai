import { ChatLayout } from "@/modules/chat/components/chat-layout";
import { ContentLayout } from "@/components/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function Home() {
  return (
    <ContentLayout title="Chat">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Chat</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="flex h-[calc(80dvh)] flex-col items-center justify-center pt-4 w-full ">
        <div className="z-10 border rounded-lg w-full min-h-fit h-full text-sm flex">
          <ChatLayout />
        </div>
      </main>
    </ContentLayout>
  );
}
