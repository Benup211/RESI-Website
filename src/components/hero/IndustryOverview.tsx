import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function IndustryOverview() {
  return (
    <section className="w-full lg:h-screen relative">
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(5, 10, 36, 1) 0%,rgba(12, 16, 83, 0.1) 100%)",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(0, 8, 16, 1) 23%,rgba(23, 35, 97, 1) 66%,rgba(10, 22, 83, 1) 91%)",
        }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(22, 23, 28, 1) 0%,rgba(31, 48, 130, 1) 20%,rgba(1, 1, 1, 1) 100%)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url(/common/blue-grid.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "15px 15px",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 65%)",
        }}
      />

      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 65%)",
        }}
      />
      <div className="relative z-10 grid grid-rows-1 lg:grid-rows-[3fr_7fr] h-full">
        <div className="w-full h-full grid gap-2 grid-cols-1 lg:grid-cols-2 p-[4vw]">
          <div className="h-full w-full">
            <h3
              className={`text-center lg:text-left ${syne.className} text-[7.5vw]/[1] md:text-3xl lg:text-[2vw]/[1] xl:text-[1.9vw]/[1] font-normal text-[#CAD1F3]`}
            >
              Real Estate is Stuck in
              <br />
              <span
                className={`${syne.className} text-[#899DFF] text-[18vw]/[1] md:text-7xl lg:text-[5.5vw]/[0.5] xl:text-[5vw]/[0.5] font-extrabold`}
              >
                2012.
              </span>
            </h3>
          </div>
          <div className="h-full w-full">
            <p
              className={`text-center lg:text-right ${syne.className} text-[3.5vw] lg:text-[20px] font-normal text-[#CAD1F3]`}
            >
              Real Estate is dying for innovation but
              <br />
              gatekeepers limit innovation.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid lg:[grid-template-columns:1fr_0.5fr_1fr_0.5fr_1fr] 2xl:[grid-template-columns:6fr_5fr_6r_5r_6fr] sm:grid-cols-1 place-items-center p-[4vw]">
            <div className="flex flex-col h-full w-full">
              <div className="relative backdrop-blur-[2px] bg-opacity-10 border-[2px] border-white/20 border-l-blue-800/15 border-b-blue-800/30 rounded-3xl flex items-center justify-center w-full min-w-[216px] min-h-[230px] lg:min-w-[250px] lg:min-h-[240px] 2xl:min-w-[15vw] 2xl:min-h-[25vh] text-[#CAD1F3] overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-y-10 z-10">
                  <Image src="/icon/book.svg" alt="book icon" width={40} height={55} />
                  <p className={`text-center ${syne.className} text-base/tight`}>
                    Pre-Digital Book of all
                    <br />
                    property data
                  </p>
                </div>
              </div>
              <p
                className={`text-center ${syne.className} font-semibold text-xl/[1.1] text-[#8499FF] mt-1`}
              >
                MLS
              </p>
            </div>
            <div className="flex items-center justify-center w-full min-h-[100px] lg:h-auto text-white relative">
              <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-t-[#FFFFFF]/40 border-dashed lg:block hidden"></div>
              <div className="absolute left-1/2 top-0 w-[2px] h-full border-l-2 border-l-[#FFFFFF]/40 border-dashed block lg:hidden"></div>
            </div>
            <div className="flex flex-col h-full w-full">
              <div className="relative backdrop-blur-[2px] bg-opacity-10 border-[2px] border-white/20 border-l-blue-800/15 border-b-blue-800/30 rounded-3xl flex items-center justify-center w-full min-w-[216px] min-h-[230px] lg:min-w-[250px] lg:min-h-[240px] 2xl:min-w-[15vw] 2xl:min-h-[25vh] text-[#CAD1F3] overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-y-10 z-10">
                  <Image src="/icon/monitor.svg" alt="monitor icon" width={40} height={55} />
                  <p className={`text-center ${syne.className} text-base/tight`}>
                    Gatekept Data, High Fee
                    <br />
                    Black-Boxes
                  </p>
                </div>
              </div>
              <p
                className={`text-center ${syne.className} font-semibold text-xl/[1.1] text-[#8499FF] mt-1`}
              >
                Zillow <br className="lg:hidden" />& others
              </p>
            </div>
            <div className="flex items-center justify-center w-full min-h-[100px] lg:h-auto text-white relative">
              <div className="absolute top-1/2 left-0 w-full lg:flex justify-evenly items-center hidden">
                <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
              </div>
              <div className="absolute left-1/2 top-0 max-w-[12px] h-full flex flex-col justify-evenly items-center lg:hidden">
                <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-3 h-3 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-2 h-2 rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
                <div className="w-[6px] h-[6px] rounded-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" />
              </div>
            </div>
            <div className="flex flex-col h-full w-full">
              <div className="relative backdrop-blur-[2px] bg-opacity-10 border-[2px] border-white/20 border-l-blue-800/15 border-b-blue-800/30 rounded-3xl flex items-center justify-center w-full min-w-[216px] min-h-[230px] lg:min-w-[250px] lg:min-h-[240px] 2xl:min-w-[15vw] 2xl:min-h-[25vh] text-[#CAD1F3] overflow-hidden">
                <div className="flex flex-col justify-center items-center gap-y-10 z-10">
                  <Image src="/icon/resi.svg" alt="resi icon" width={40} height={55} />
                  <p className={`text-center ${syne.className} text-base/tight`}>
                    Provable Open
                    <br />
                    Source Intelligence
                  </p>
                </div>
              </div>
              <p
                className={`text-center ${syne.className} font-semibold text-xl/[1.1] text-[#8499FF] mt-1`}
              >
                RESI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
