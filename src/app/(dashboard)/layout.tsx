import { Navbar, SearchBar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entertaiment Home",
  description: "Entertaiment show films",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen gap-6 md:gap-8 2xl:grid-cols-[auto_1fr] 2xl:grid-rows-[auto_1fr] 2xl:gap-8 2xl:pt-8">
      <div className="2xl:row-span-2">
        <Navbar />
      </div>
      <SearchBar />

      <main>{children}</main>
    </div>
  );
}
