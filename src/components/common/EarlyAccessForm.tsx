import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";
import { Work_Sans, Syne } from "next/font/google";
import { motion } from "framer-motion";

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

interface FormState {
  email: string;
  error: string;
  isSubmitting: boolean;
  isSuccess: boolean;
}

interface EarlyAccessFormProps {
  onClose?: () => void;
}

export function EarlyAccessForm({ onClose }: EarlyAccessFormProps) {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    error: "",
    isSubmitting: false,
    isSuccess: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState((prev) => ({
      ...prev,
      email: e.target.value,
      error: "", // Clear error when user types
    }));
  };

  const handleWaitListSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formState.email.trim()) {
      setFormState((prev) => ({ ...prev, error: "Email address is required" }));
      return;
    }

    if (!validateEmail(formState.email)) {
      setFormState((prev) => ({
        ...prev,
        error: "Please enter a valid email address",
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, error: "" }));

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formState.email }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          isSuccess: true,
        }));
      } else {
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          error: data.message || "Something went wrong. Please try again.",
        }));
      }
    } catch {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "Network error. Please try again.",
      }));
    }
  };

  const handleComplete = (): void => {
    // Close the dialog - parent component should handle this
    // Reset form state
    setFormState({
      email: "",
      error: "",
      isSubmitting: false,
      isSuccess: false,
    });
    if (onClose) onClose();
  };

  return (
    <DialogContent className="z-100 w-[90%] sm:w-[345px] border-2 border-b-[#3678F3] border-l-[#3678F3]/80 border-r-[#3678F3]/90 border-t-[#3678F3]/40 bg-gradient-to-b from-slate-500/90 via-slate-500/80 to-slate-500/90 backdrop-blur-[3px] p-0 rounded-3xl overflow-hidden shadow-[inset_0_0_40px_rgba(128,232,255,0.3)] [&>button]:hidden">
      <div className="relative flex flex-col items-center px-6 sm:px-8 py-12 sm:py-10 space-y-5 sm:space-y-4">
        <div
          className="absolute top-15 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[400px] rounded-full pointer-events-none opacity-60 blur-2xl z-1"
          style={{ background: "radial-gradient(circle, #80E8FF 0%, #B4E7FF 63%,#2B538F 100%)" }}
        ></div>
        {/* Globe Image with Neomorphic Circle */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-2 z-2">
          <div className="absolute w-44 h-44 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-white/30 to-white/10 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.3),inset_6px_6px_12px_rgba(0,0,0,0.1)] sm:shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.3),inset_8px_8px_16px_rgba(0,0,0,0.1)] z-2" />
          <motion.div
            className="relative w-40 h-40 z-10"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/icon/earth-popup-modal.svg"
              alt="earth"
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </div>
        <DialogClose className="absolute right-4 sm:right-6 top-4 sm:top-6 z-50 active:border-1 active:border-slate-400">
          <X className="h-5 w-5 text-white" strokeWidth={1.8} />
          <span className="sr-only">Close</span>
        </DialogClose>

        {/* Success State */}
        {formState.isSuccess ? (
          <>
            <DialogHeader className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2 text-center z-2">
              <DialogTitle
                className={`${syne.className} text-2xl text-center sm:text-2xl font-semibold text-white tracking-tight leading-[1.2]`}
              >
                Thanks for Signing Up
              </DialogTitle>
              <DialogDescription
                className={`text-white text-center px-2 ${worksans.className} leading-[1.2] text-[12px]`}
              >
                We&apos;ve saved your spot and can&apos;t wait to share updates soon.
              </DialogDescription>
            </DialogHeader>

            <div className="w-full pt-3 sm:pt-2">
              <Button
                type="button"
                onClick={handleComplete}
                className="w-full h-11 sm:h-12 bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-semibold text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                Complete
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Form State */}
            <DialogHeader className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2 text-center z-2">
              <DialogTitle
                className={`${syne.className} text-2xl text-center sm:text-2xl font-semibold text-white tracking-tight leading-[1.2]`}
              >
                Get Early Access by
                <br />
                Signing Up
              </DialogTitle>
              <DialogDescription
                className={`text-white text-center px-2 ${worksans.className} leading-[1.2] text-[12px]`}
              >
                Access Real Estate Data, on Demand.
              </DialogDescription>
            </DialogHeader>

            {/* Form Fields */}
            <form
              onSubmit={handleWaitListSubmit}
              className="w-full space-y-4 sm:space-y-4 pt-3 sm:pt-2"
            >
              {/* Email Input */}
              <div className="space-y-2 sm:space-y-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={handleEmailChange}
                  disabled={formState.isSubmitting}
                  className={`h-11 sm:h-12 bg-white/95 border-none rounded-xl text-gray-700 placeholder:text-gray-500 text-sm sm:text-base shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                    formState.error ? "ring-2 ring-red-400" : ""
                  }`}
                />
                {formState.error && (
                  <p className="text-red-200 text-xs sm:text-sm font-medium px-1">
                    {formState.error}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                disabled={formState.isSubmitting}
                className={`w-full h-11 sm:h-12 bg-[#47B9FF] hover:bg-[#47B9FF]/80 text-[#152A37] font-semibold text-base rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${syne.className} font-semibold leading-[1.2] hover:underline`}
              >
                {formState.isSubmitting ? "Submitting..." : "Register"}
              </Button>
            </form>
          </>
        )}
      </div>
    </DialogContent>
  );
}

export default EarlyAccessForm;
