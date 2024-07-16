import { Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title desde layout dashboard",
  description: "SEO Title",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-main-blue-very-dark 2xl:grid-cols-[auto_1fr] 2xl:grid-rows-1">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
