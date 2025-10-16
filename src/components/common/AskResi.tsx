"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { EarlyAccessForm } from "./EarlyAccessForm";

// Configuration for typewriter animation
const TYPEWRITER_CONFIG = {
  typingSpeed: 50, // milliseconds per character
  deletingSpeed: 30, // milliseconds per character when deleting
  delayBetweenQuestions: 2000, // pause after typing complete question
  delayBeforeDeleting: 1500, // pause before starting to delete
};

const QUESTIONS = [
  "What is the average price of a house in San Francisco?",
  "What is the most common type of property sold in New Jersey?",
];

export default function AskResi() {
  const [userInput, setUserInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (userInput.length > 0) {
      setPlaceholder("");
      return;
    }

    const currentQuestion = QUESTIONS[currentQuestionIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentQuestion.length) {
            setPlaceholder(currentQuestion.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
            }, TYPEWRITER_CONFIG.delayBeforeDeleting);
          }
        } else {
          if (charIndex > 0) {
            setPlaceholder(currentQuestion.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setCurrentQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
          }
        }
      },
      isDeleting ? TYPEWRITER_CONFIG.deletingSpeed : TYPEWRITER_CONFIG.typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, currentQuestionIndex, isDeleting, userInput]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    // If user hasn't typed anything, use the current placeholder as input
    const searchQuery = userInput || placeholder;
    if (searchQuery) {
      // Add your search logic here
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="bg-gradient-to-tr from-[#CAD1F3] via-[#334FD7]/70 to-[#334FD7] rounded-full p-[2px] w-full max-w-2xl">
      <div className="relative bg-[#CAD1F3] rounded-full">
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="pr-14 h-12 bg-muted/50 border-0 rounded-full text-black font-medium placeholder:text-gray-600"
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="icon"
              onClick={handleSubmit}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-18 rounded-4xl bg-primary hover:bg-primary/90 bg-gradient-to-br from-[#293EAC] to-[#080D23] cursor-pointer"
            >
              <Image src={"/icon/button-resi.svg"} alt="resi icon" width={23} height={23} />
            </Button>
          </DialogTrigger>
          <EarlyAccessForm onClose={() => setIsDialogOpen(false)}/>
        </Dialog>
      </div>
    </div>
  );
}
