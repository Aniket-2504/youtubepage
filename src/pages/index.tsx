import Image from "next/image";
import { Inter } from "next/font/google";

import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>hello broo

      <VideoCard
        title={"Master Rollup.js with these one video"}
        image={"imgone.jpg"}
        author={"ImranCode"}
        views={"70M"}
        time={"13 days ago"}

      ></VideoCard>
    </div>
  );
}
