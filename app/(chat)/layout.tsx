import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cin Logos Chat",
  description: "Generate your logo with Ai",
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
