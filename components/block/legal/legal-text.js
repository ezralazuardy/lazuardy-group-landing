"use client";
import { useEffect } from "react";

export default function LegalText({ content }) {
  useEffect(() => {
    const links = document.querySelectorAll(".content a");
    links.forEach((link) => {
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("target", "_blank");
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div
          className="content w-full max-w-2xl text-neutral-400 leading-snug font-light text-sm text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}
