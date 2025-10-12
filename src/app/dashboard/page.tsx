"use client";

import RealEstateCard from "@/components/common/RealEstateCard";
import SearchInMap from "@/components/common/SearchInMap";
import Navbar from "@/components/hero/Navbar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search, Triangle, X } from "lucide-react";
import { Work_Sans, Syne } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import React, { } from "react";
import { RealEstateMapComponent, MapSearchControl } from "@/maps/components/map";
import type { MapSearchRef } from "@/maps/components/map";
import type { Property, MapBounds } from "@/maps/components/map";


const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

type ResponseData = {
  totalNationalData: string;
  growthRate: string;
  propertyCoverage: string;
};

type RealEstateData = {
  price: string;
  bed: number;
  bath: number;
  sqft: string;
  location: string;
  source: string;
  status: "sold" | "for sale" | "pending";
};

const MOCK_DATA: RealEstateData[] = [
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "for sale",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "pending",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "sold",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "for sale",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "pending",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "sold",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "for sale",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "pending",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "sold",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "for sale",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "pending",
  },
  {
    price: "120,000",
    bed: 3,
    bath: 2,
    sqft: "2k",
    location: "134 Hamilton St. south",
    source: "https://resilabs.ai",
    status: "sold",
  },
];

export default function Dashboard() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [realEstateData, setRealEstateData] = useState<RealEstateData[]>([]);
  const [query,setQuery]=useState<String>("");
  const mapRef = useRef<L.Map | null>(null);

  const [data, setData] = useState<ResponseData>({
    totalNationalData: "0",
    growthRate: "0",
    propertyCoverage: "0M",
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard-stats`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    }

    fetchStats();
  }, []);

  const { totalNationalData, growthRate, propertyCoverage } = data;

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    setQuery(query);
    // Filter from mock data (simulate API)
    const filtered = MOCK_DATA.filter((item) =>
      item.location.toLowerCase().includes(query.toLowerCase())
    );

    // If nothing matches, you could set a "no results" message
    setRealEstateData(filtered.length ? filtered : MOCK_DATA);
  };

  const handlePropertyClick = (property: Property) => {
    console.log("Property clicked:", property);
  };

  return (
    <main className="w-full h-auto lg:h-screen overflow-auto lg:overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(12, 16, 83, 0.1) 0%,rgba(7, 18, 28, 1) 100%",
          opacity: 0.2,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(10, 22, 83, 1) 9%,rgba(23, 35, 97, 1) 34%,rgba(0, 8, 16, 1) 77%",
          opacity: 0.5,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(1, 1, 1, 1) 9%,rgba(31, 48, 130, 1) 56%,rgba(22, 23, 28, 1) 100%",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/radical-gradient.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          mixBlendMode: "soft-light",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/map.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.38,
          scale: 1,
          mixBlendMode: "lighten",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 5%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0) 20%",
        }}
      />

      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-black/60 backdrop-blur-md"
          style={{
            backdropFilter: "blur(1px)",
            WebkitBackdropFilter: "blur(1px)",
          }}
        />
      </div>
      <Navbar />
      <section>
        <div className="w-full h-[10vh] lg:h-[10vh] 2xl:h-[8vh]"></div>
        <div className="w-full h-[15vh] xz:h-[13vh] lg:h-[10vh] xl:h-[8vh] p-4 lg:px-8 flex flex-col lg:flex-row items-start justify-between lg:items-center gap-2">
          <h2
            className={`font-semibold leading-[0.7] ${syne.className} text-3xl xl:text-4xl bg-gradient-to-br from-[#607AFF] via-[#BFA4FF] to-[#BF51FF] bg-clip-text text-transparent z-100`}
          >
            Explore
          </h2>
          <div className="flex justify-center items-center w-full lg:w-auto h-full">
            <div className={`w-full lg:min-w-[350px] ${showSearch ? "block" : "block lg:hidden"}`}>
              <SearchInMap onSearch={handleSearch} />
            </div>
            <div className="hidden lg:block">
              <Button
                className="relative w-[60px] h-[45px] backdrop-blur-[2px] border-[1px] border-white/20 border-l-blue-800 border-b-blue-800 rounded-3xl text-[#E6E6E6] overflow-hidden hover:bg-[#282828] bg-gradient-to-br from-[#323232]/100 to-[#282828]/70"
                onClick={() => setShowSearch(!showSearch)}
              >
                {showSearch ? <X width={20} height={20} /> : <Search width={20} height={20} />}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row h-auto lg:h-[65vh] xl:h-[72vh] 2xl:h-[74vh]">
          <div
            className={`transition-all duration-500 ${realEstateData.length === 0
              ? "w-full h-[65vh] lg:h-full"
              : "h-[48vh] lg:h-full w-full lg:max-w-[50vw] xl:max-w-[60vw]"
              } z-100 rounded-xl overflow-hidden`}
          >
            {/* map */}
            <RealEstateMapComponent
              mapRef={mapRef}
              height="100%"
              width="100%"
              showCurrentLocation={true}
              currentLocationLabel="Your Location"
              eventHandlers={{
                onPropertyClick: handlePropertyClick,
                onBoundsChange: (bounds: MapBounds) => {
                  // console.log("Bounds changed:", bounds);
                }
              }}
            />
          </div>

          {/* Real Estate Results */}
          {realEstateData.length > 0 && (
            <ScrollArea className="w-full h-auto lg:h-full lg:max-w-[50vw] xl:max-w-[40vw]">
              <p className={`px-4 ${syne.className} lg:leading-[0.7] text-sm xl:text-base lg:py-1 text-[#CAD1F3]`}>Showing results for data in<br className="block lg:hidden" /> <span className={`text-[15px] xl:text-[18px] ${syne.className} lg:leading-[0.7]`}>&quot;{query}&quot;</span></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center">
                {realEstateData.map((item, index) => (
                  <RealEstateCard
                    key={index}
                    price={item.price}
                    bed={item.bed}
                    bath={item.bath}
                    sqft={item.sqft}
                    location={item.location}
                    source={item.source}
                    status={item.status}
                  />
                ))}
              </div>
              <ScrollBar orientation="vertical" forceMount className="hidden lg:flex" />
            </ScrollArea>
          )}
        </div>
        <div className="w-full h-[15vh] xl:h-[10vh] bg-black p-2 lg:py-3 lg:px-8 flex justify-center items-center">
          <div className="w-full h-full rounded-xl overflow-hidden border-[1px] border-[#345ba3]/60 relative flex justify-center items-center p-1">
            <div
              className="absolute top-0 left-0 w-[20%] h-[150%] rounded-full pointer-events-none blur-[60px] opacity-80 z-0"
              style={{ background: "radial-gradient(circle, #4827AC 100%, transparent 100%)" }}
            ></div>

            <div
              className="absolute bottom-0 right-1/4 w-[20%] h-[150%] rounded-full pointer-events-none blur-[60px] opacity-80 z-0"
              style={{ background: "radial-gradient(circle, #4827AC 100%, transparent 100%)" }}
            ></div>

            <div className="w-full h-full grid grid-cols-3">
              <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-evenly z-1 border-r border-[#595959]/60">
                <p
                  className={`${syne.className} text-[#CAD1F3] text-xs lg:text-base order-2 lg:order-1`}
                >
                  Percent of
                  <br /> nationwide data
                </p>
                <p
                  className={`${worksans.className} font-semibold text-2xl lg:text-4xl text-white order-1 lg:order-2`}
                >
                  {totalNationalData ?? "56"}
                  <span className="ml-[1px] text-2xl font-normal">%</span>
                </p>
              </div>
              <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-evenly z-1 border-r border-[#595959]/60">
                <p
                  className={`${syne.className} text-[#CAD1F3] text-xs lg:text-base order-2 lg:order-1`}
                >
                  Weekly Rate
                  <br /> of Growth
                </p>
                <p
                  className={`${worksans.className} font-semibold text-2xl lg:text-4xl text-white order-1 lg:order-2 flex`}
                >
                  {growthRate ?? "78"}
                  <span className="ml-[1px] text-2xl font-normal flex justify-center items-center gap-1">
                    %{" "}
                    <Triangle
                      fill="green"
                      width={15}
                      height={15}
                      className="transform rotate-[0deg]"
                    />
                  </span>
                </p>
              </div>
              <div className="p-2 flex flex-col lg:flex-row lg:items-center justify-evenly z-1">
                <p
                  className={`${syne.className} text-[#CAD1F3] text-xs lg:text-base order-2 lg:order-1`}
                >
                  Property Coverage
                </p>
                <p
                  className={`${worksans.className} font-semibold text-2xl lg:text-4xl text-white order-1 lg:order-2`}
                >
                  {propertyCoverage ?? "76.7"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
