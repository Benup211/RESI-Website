import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function AskResi() {
  return (
    <div className="bg-gradient-to-tr from-[#CAD1F3] via-[#334FD7]/70 to-[#334FD7] rounded-full p-[2px] w-full max-w-2xl">
      <div className="relative bg-[#CAD1F3] rounded-full">
        <Input
          type="text"
          placeholder="Search..."
          className="pr-14 h-12 bg-muted/50 border-0 rounded-full text-black font-medium"
        />
        <Button
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-18 rounded-4xl bg-primary hover:bg-primary/90 bg-gradient-to-br from-[#293EAC] to-[#080D23]"
        >
          <Image src={"/icon/button-resi.svg"} alt="resi icon" width={23} height={23} />
        </Button>
      </div>
    </div>
  );
}
