import { Work_Sans, Syne } from "next/font/google";
import { useMemo } from "react";
import Image from "next/image";

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function RealEstateCard({
  price,
  bed,
  bath,
  sqft,
  location,
  source,
  status,
}: {
  price: string;
  bed: number;
  bath: number;
  sqft: string;
  location: string;
  source: string;
  status: "sold" | "for sale" | "pending";
}) {
  const colors = useMemo(() => {
    switch (status) {
      case "sold":
        return { fill: "#FEC3C3", stroke: "#FF9898" };
      case "pending":
        return { fill: "#C3DBFE", stroke: "#748FFB" };
      case "for sale":
        return { fill: "#C3FED0", stroke: "#72FFB1" };
      default:
        return { fill: "#E0E0E0", stroke: "#B0B0B0" };
    }
  }, [status]);

  const shortened = useMemo(() => {
    if (!location) return "";
    if (location.length <= 15) return location;

    const first = location.slice(0, 7);
    const last = location.slice(-5);
    return `${first}...${last}`;
  }, [location]);

  return (
    <div className="w-full max-w-[380px] h-[120px] sm:h-[130px] lg:h-[120px] rounded-xl backdrop-blur-[2px] bg-gradient-bl from-55% from-[#CAD1F3]/15 via-77% via-[#657FFF] to-100% to-[#5B76F6] border-2 border-white/20 border-l-blue-800/50 border-b-blue-800/70 shadow-[1px] shadow-slate-400 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-0 w-[80%] h-[80%] rounded-full pointer-events-none blur-[50px] opacity-60 z-[0]"
        style={{ background: "radial-gradient(circle, #18009E 10%, #0A0D3E 100%)" }}
      />
      <div className="w-full h-full rounded-xl py-4 px-6 flex flex-col justify-between items-start">
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <p
              className={`lg:text-[22px] xl:text-[24px] 2xl:text-[28px] ${worksans.className} font-medium tracking-tight text-white leading-[0.7]`}
            >
              ${price}
            </p>
            <p
              className={`px-2 py-1 rounded-xl text-sm font-medium capitalize ${syne.className} tracking-tight leading-[0.7] text-base`}
              style={{
                backgroundColor: colors.fill,
                borderColor: colors.stroke,
                borderWidth: 1,
                borderStyle: "solid",
              }}
            >
              {status}
            </p>
          </div>
          <div className="flex items-center gap-1 mt-[4px]">
            <div className="flex justify-center items-center p-1 border-1 border-white/20 border-l-blue-800/50 border-b-blue-800/70 rounded-md bg-transparent gap-[1px]">
              <span>
                <Image src="/icon/bed.svg" alt="bed icon" width={16} height={11} />
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                {bed}
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                Beds
              </span>
            </div>
            <div className="flex justify-center items-center p-1 border-1 border-white/20 border-l-blue-800/50 border-b-blue-800/70 rounded-md bg-transparent gap-[1px]">
              <span>
                <Image src="/icon/bath.svg" alt="bath icon" width={16} height={11} />
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                {bath}
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                Bths
              </span>
            </div>
            <div className="flex justify-center items-center p-1 border-1 border-white/20 border-l-blue-800/50 border-b-blue-800/70 rounded-md bg-transparent gap-[1px]">
              <span>
                <Image src="/icon/sqft.svg" alt="sqft icon" width={12} height={11} />
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                {sqft}
              </span>
              <span
                className={`lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium tracking-tight text-white cursor-pointer`}
              >
                Sqft.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-full">
          <div className="flex justify-center items-center gap-[2px]" title={location}>
            <span>
              <Image src="/icon/location.svg" alt="location icon" width={8} height={14} />
            </span>
            <span
              className={`lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium text-[#CAD1F3] cursor-pointer text-wrap`}
            >
              {shortened}
            </span>
          </div>
          <a className="flex justify-center items-center gap-[3px]" href={source} target="_blank">
            <span>
              <Image src="/icon/arrow.svg" alt="arrow icon" width={12} height={12} />
            </span>
            <span
              className={`lg:text-[12px] xl:text-[14px] 2xl:text-[14px] 3xl:text-[16px] ${worksans.className} font-medium text-[#CAD1F3]`}
            >
              Source
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
