import { Inter } from "next/font/google";
import ResumePage from "@/components/ResumePage";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main
      className={`bg-neutral-700 ${inter.className}`}
    >
      <ResumePage/>
    </main>
  );
}
