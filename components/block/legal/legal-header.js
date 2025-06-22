import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LegalHeader({ title, date }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="grid grid-cols-3 w-full md:max-w-3xl">
          <div className="flex w-full col-span-3 px-16 mb-8">
            <div className="flex items-center justify-start">
              <Button
                size="default"
                variant="link"
                className="transition-colors text-neutral-400 hover:text-white"
                asChild
              >
                <Link href="/">
                  <ArrowLeft />
                  Back
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-end w-full text-neutral-400 text-sm">
              PT Lazuardy Innovation Group
            </div>
          </div>
          <div className="flex flex-col text-neutral-200 w-full justify-center items-center col-span-3">
            <h1 className="text-md md:text-lg text-center uppercase">Legal</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-neutral-300 justify-center items-center w-full mt-8">
        <h2 className="w-full md:max-w-3xl text-3xl md:text-4xl text-center">
          {title}
        </h2>
        <div className="flex space-x-4 mt-8">
          <span className="flex md:max-w-2xl font-light text-sm text-white text-center leading-snug">
            {date}
          </span>
        </div>
      </div>
    </>
  );
}
