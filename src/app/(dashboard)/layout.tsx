import { Navbar, SearchBar } from "@/components";
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
    // <div className="min-h-screen grid-rows-[auto_auto_1fr] gap-6 2xl:grid 2xl:grid-cols-[auto_1fr]">
    <div className="min-h-screen">
      <Navbar />
      <SearchBar />

      <main>{children}</main>
    </div>
  );
}
