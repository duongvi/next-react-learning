import { Inter } from "next/font/google";
import ResumePage from "@/components/ResumePage";
import MouseLight from "@/components/MouseLight";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main
      className={`bg-neutral-700 ${inter.className}`}
    >
      <MouseLight/>
      <ResumePage/>
    </main>
  );
}
