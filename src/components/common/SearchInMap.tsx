"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

type SearchInMapProps = {
  onSearch: (query: string) => void;
};

export default function SearchInMap({ onSearch }: SearchInMapProps) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = () => {
    const query = userInput.trim();
    if (!query) return;
    onSearch(query);
    setUserInput("");
  };

  return (
    <div className=" rounded-full p-[2px] w-full">
      <div className="relative bg-gradient-to-b from-[#CAD1F3] via-[#334FD7]/70 to-[#334FD7] p-[2px] rounded-full">
        <Input
          type="text"
          placeholder={"Address,City,Zip"}
          onChange={(e) => setUserInput(e.target.value)}
          className="pr-14 h-12 border-0 rounded-full text-white font-medium placeholder:text-white bg-gradient-to-br from-[10%] from-[#323232] to-[87%] to-[#282828]"
        />
        <Button
          size="icon"
          onClick={handleSubmit}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-18 rounded-4xl  border-1 border-gray-700 hover:border-gray-500 bg-gradient-to-br from-[#293EAC] to-[#080D23] cursor-pointer"
        >
          <Image src={"/icon/button-resi.svg"} alt="resi icon" width={20} height={20} />
        </Button>
      </div>
    </div>
  );
}
