"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

export function EmailSubscription() {
  const [showMessage, setShowMessage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [timer, setTimer] = useState(10);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const handleSubmit = (e) => {
    // Let the form submit as normal (to new tab), but show the message
    setShowMessage(true);
    setFadeOut(false);
    setTimer(10);

    // Clear any previous timeouts/intervals
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start countdown timer
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Start fade out after 10 seconds
    timeoutRef.current = setTimeout(() => {
      setFadeOut(true);
      // Hide after fade out transition (500ms)
      setTimeout(() => setShowMessage(false), 500);
    }, 10000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!showMessage && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [showMessage]);

  return (
    <div className="relative w-full">
      <form
        action="https://app.convertkit.com/forms/8215873/subscriptions"
        method="post"
        target="_blank"
        className="flex w-full items-center gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="email_address"
          placeholder="Email"
          required
          autoComplete="email"
        />
        <Button
          type="submit"
          variant="outline"
          className="hover:cursor-pointer"
        >
          Subscribe
        </Button>
        {showMessage && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-10 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{ background: "rgba(23,23,23,0.96)" }}
          >
            <div className="bg-neutral-900 opacity-100 border border-neutral-800 w-full text-white rounded-lg px-4 py-2 shadow text-sm flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0 mt-0.5 me-1" />
                <span>Check your email for confirmation!</span>
              </div>
              <span className="ml-4 text-neutral-400 font-mono min-w-[2.5em] text-xs text-right">
                {timer}s
              </span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
