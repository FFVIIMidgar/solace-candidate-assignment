"use client";

import { Button } from "../../../components/ui/button";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const onBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  return (
    <Button className="mt-4 bg-emerald-800 hover:bg-emerald-900" onClick={onBackToTopClick}>
      <ArrowUp />
      Back to top
    </Button>
  );
}
