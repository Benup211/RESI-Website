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

interface FormState {
    email: string;
    error: string;
    isSubmitting: boolean;
    isSuccess: boolean;
}

export function EarlyAccessForm() {
    const [formState, setFormState] = useState<FormState>({
        email: "",
        error: "",
        isSubmitting: false,
        isSuccess: false
    });

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormState(prev => ({
            ...prev,
            email: e.target.value,
            error: "" // Clear error when user types
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        // Validation
        if (!formState.email.trim()) {
            setFormState(prev => ({
                ...prev,
                error: "Email address is required"
            }));
            return;
        }

        if (!validateEmail(formState.email)) {
            setFormState(prev => ({
                ...prev,
                error: "Please enter a valid email address"
            }));
            return;
        }

        // Set submitting state
        setFormState(prev => ({
            ...prev,
            isSubmitting: true,
            error: ""
        }));

        try {
            // TODO: Replace this mock with actual API call
            // Example: await submitEarlyAccess(formState.email);
            
            // Mock API call - simulating network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mock success (90% success rate for demo)
            const isSuccess = Math.random() > 0.1;
            
            if (isSuccess) {
                setFormState(prev => ({
                    ...prev,
                    isSubmitting: false,
                    isSuccess: true
                }));
            } else {
                throw new Error("Submission failed");
            }
        } catch (__) {
            setFormState(prev => ({
                ...prev,
                isSubmitting: false,
                error: "Something went wrong. Please try again."
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
            isSuccess: false
        });
    };

    return (
        <DialogContent
            className="w-[90%] sm:w-[345px] bg-gradient-to-br from-slate-400/40 via-slate-300/30 to-slate-400/40 border-slate-300/50 backdrop-blur-xl p-0 overflow-hidden [&>button]:hidden max-h-[85vh] overflow-y-auto"
        >
            <div className="flex flex-col items-center px-6 sm:px-8 py-12 sm:py-10 space-y-5 sm:space-y-4">
                {/* Globe Image with Neomorphic Circle */}
                <div className="relative flex items-center justify-center mb-4 sm:mb-2">
                    <div className="absolute w-44 h-44 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-white/30 to-white/10 shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.3),inset_6px_6px_12px_rgba(0,0,0,0.1)] sm:shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.3),inset_8px_8px_16px_rgba(0,0,0,0.1)]" />
                    <div className="relative w-32 h-32 sm:w-32 sm:h-32 z-10">
                        <Image
                            src={"/icon/earth-popup-modal.svg"}
                            alt="earth"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                </div>

                <DialogClose className="absolute right-4 sm:right-6 top-4 sm:top-6 z-50">
                    <X className="h-6 w-6 sm:h-8 sm:w-8 text-white" strokeWidth={2.5} />
                    <span className="sr-only">Close</span>
                </DialogClose>

                {/* Success State */}
                {formState.isSuccess ? (
                    <>
                        <DialogHeader className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2 text-center">
                            <DialogTitle className="text-2xl text-center sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                Thanks for Signing Up
                            </DialogTitle>
                            <DialogDescription className="text-white/90 text-center text-sm sm:text-base font-medium px-2">
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
                        <DialogHeader className="mt-2 sm:mt-4 space-y-1.5 sm:space-y-2 text-center">
                            <DialogTitle className="text-2xl text-center sm:text-3xl font-bold text-white tracking-tight leading-tight">
                                Get Early Access by<br />Signing Up
                            </DialogTitle>
                            <DialogDescription className="text-white/90 text-center text-sm sm:text-base font-medium px-2">
                                Access Real Estate Data, on Demand.
                            </DialogDescription>
                        </DialogHeader>

                        {/* Form Fields */}
                        <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-4 pt-3 sm:pt-2">
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
                                className="w-full h-11 sm:h-12 bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-semibold text-sm sm:text-base rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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