import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function FlyWheel() {
  return (
    <section className="w-full h-screen bg-black">
      <div className="w-full h-full grid grid-rows-[3fr_7fr] md:grid-rows-[2fr_8fr] lg:grid-rows-[2fr_8fr]">
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-[90%] lg:w-[60%] flex flex-col justify-center items-center gap-2 h-full">
            <h1
              className={`${syne.className} text-[#CAD1F3] leading-[0.9] font-medium text-3xl lg:text-[4vw] text-center`}
            >
              The Incentive
              <br className="md:hidden" /> Flywheel
            </h1>
            <p
              className={`${syne.className} text-[#CAD1F3] leading-[1.2] font-medium text-xs lg:text-[1vw] text-center`}
            >
              Aligning all stakeholders towards one mission;
              <br className="md:hidden" /> accelerating PropTech innovation.
            </p>
          </div>
        </div>
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[300px] md:w-[487px] md:h-[400px] mx-auto">
            <Image src="/mesh/circle-mesh.svg" alt="circle square mesh" fill objectFit="contain" />
            {/* icon and name */}
            <div className="absolute text-[#CAD1F3] top-1/2 -left-3 xz:-left-4 sm:left-5 -translate-1/2 flex justify-center items-center gap-2">
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-sm sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Product
              </p>
              <div className="relative w-[28px] h-[28px] lg:w-[70px] lg:h-[70px] rounded-full p-[2px] border-white/40 border-1">
                <div className="rounded-full w-full h-full backdrop-blur-[2px] bg-opacity-10">
                  <Image src="/mesh/ai.svg" alt="ai icon" fill className="p-3 rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute text-[#CAD1F3] top-1/2 -right-1/4 xz:-right-[28%] md:-right-1/12 lg:-right-1/9 -translate-y-1/2 flex justify-center items-center gap-2">
              <div className="relative w-[28px] h-[28px] lg:w-[70px] lg:h-[70px] rounded-full p-[2px] border-white/40 border-1">
                <div className="rounded-full w-full h-full backdrop-blur-[1px]">
                  <Image src="/mesh/treasury.png" alt="ai icon" fill className="p-3 rounded-full" />
                </div>
              </div>
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-sm sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Treasury
              </p>
            </div>
            <div className="absolute text-[#CAD1F3] top-5 sm:top-4 md:top-0 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-sm sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                User
              </p>
              <div className="relative w-[28px] h-[28px] lg:w-[51px] lg:h-[51px]">
                <Image src="/mesh/user.svg" alt="user icon" fill className="p-1" />
              </div>
            </div>
            <div className="absolute text-[#CAD1F3] -bottom-8 sm:-bottom-4 md:-bottom-20 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
              <div className="relative w-[28px] h-[28px] lg:w-[51px] lg:h-[51px]">
                <Image src="/mesh/data.svg" alt="data icon" fill className="p-1" />
              </div>
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-sm sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Data
              </p>
            </div>

            {/* description */}
            <div
              className={`absolute text-[#CAD1F3] -left-8 top-0 -translate-x-1/7 xz:-translate-x-1/4 sm:top-1/12 sm:-left-10 text-right sm:-translate-x-1/2 ${syne.className} text-xs lg:text-[1rem]`}
            >
              <p>
                User feedback loops
                <br />
                create improving
                <br />
                products.
              </p>
            </div>
            <div
              className={`absolute text-[#CAD1F3] bottom-0 -left-8 -translate-x-1/7 xz:-translate-x-1/4 sm:bottom-1/12 sm:-left-10 text-right sm:-translate-x-1/2 ${syne.className} text-xs lg:text-[1rem]`}
            >
              <p>
                Industry data feeds RESI
                <br />
                intelligence, creating
                <br />
                stronger products.
              </p>
            </div>
            <div
              className={`absolute text-[#CAD1F3] top-0 -right-8 translate-x-1/7 xz:translate-x-1/4 sm:top-1/12 sm:-right-10 sm:translate-x-1/2 text-left ${syne.className} text-xs lg:text-[1rem]`}
            >
              <p>
                Users pay in fiat or
                <br />
                crypto to access
                <br />
                products and we
                <br />
                buy back tokens.
              </p>
            </div>
            <div
              className={`absolute text-[#CAD1F3] bottom-0 -right-8 translate-x-1/7 xz:translate-x-1/4 sm:bottom-1/12 sm:-right-10 sm:translate-x-1/2 text-left ${syne.className} text-xs lg:text-[1rem]`}
            >
              <p>
                Investments and
                <br />
                emissions expand
                <br />
                data use cases
                <br />
                and user growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
