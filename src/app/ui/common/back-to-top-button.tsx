"use client";

import { Button } from "../../../components/ui/button";
import { CircleArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const onBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  return (
    <div className="flex justify-center">
      <Button className="mt-4 bg-emerald-800 hover:bg-emerald-900" onClick={onBackToTopClick}>
        <CircleArrowUp />
        Back to top
      </Button>
    </div>
  );
}
