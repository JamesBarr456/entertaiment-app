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
    <div className="min-h-screen 2xl:grid 2xl:grid-cols-[auto_1fr] 2xl:grid-rows-[auto_1fr] 2xl:gap-8 2xl:pt-8">
      <div className="2xl:row-span-2">
        <Navbar />
      </div>
      <SearchBar />

      <main>{children}</main>
    </div>
  );
}
