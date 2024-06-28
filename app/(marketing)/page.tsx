import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading } from "/app/(marketing)/_components/heading.tsx";
import { Heroes } from "/app/(marketing)/_components/heroes.tsx";
import { Footer } from "/app/(marketing)/_components/footer";
import { Navbar } from "./_components/navbar";
const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div
        className="flex flex-col items-center justify-center
    md:justify-start text-center gap-y-8 flex-1 px-6 pb-10"
      >
        <Navbar />
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
};
export default MarketingPage;
