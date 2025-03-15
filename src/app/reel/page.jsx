"use client";
import React, { useEffect, useState, Suspense } from "react";
import style from "./Reel.module.css";
import ReelComp from "@/component/ReelComp/ReelComp";
import { useRouter, useSearchParams } from "next/navigation";
import { useGlobalContext } from "@/component/Context";

const ReelPage = () => {
  const { fetchReels, reels } = useGlobalContext();
  const [index, setIndex] = useState(0);
  const [videoId, setVideoId] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  if (videoId) {
    console.log("videoId:", videoId.id);
  }

  useEffect(() => {
    if (reels.length > 0) {
      setVideoId(reels[index]?.id || ""); // Ensure there's a valid id
    }
  }, [index, reels]);

  useEffect(() => {
    if (reels.length > 0) {
      const newVideoId = reels[index]?.id || "";

      // Update URL with the new video ID (without reloading)
      if (newVideoId) {
        const params = new URLSearchParams(searchParams.toString());
        params.set("id", newVideoId);
        router.push(`?${params.toString()}`, { scroll: false });
      }
    }
  }, [index, reels, router, searchParams]);

  const nextVideo = () => {
    setIndex((prevIndex) =>
      prevIndex === reels.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const nextBackVideo = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  useEffect(() => {
    fetchReels();
  }, [fetchReels]);

  return (
    <div className={style.container}>
      <ReelComp
        reelData={reels[index]}
        reels={reels}
        index={index}
        nextVideo={nextVideo}
        nextBackVideo={nextBackVideo}
      />
    </div>
  );
};

// **Wrap Page in Suspense Boundary**
const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ReelPage />
  </Suspense>
);

export default Page;
