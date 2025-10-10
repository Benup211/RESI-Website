import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function FlyWheel() {
  return (
    <section className="w-full h-screen bg-black relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom,rgba(0,0,0,1) 0%,rgba(0,0,0,0.1) 80%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/common/blue-grid.svg)",
          backgroundRepeat: "repeat",
          backgroundSize: "15px 15px",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 65%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top,rgba(0, 0, 0, 1) 0%,rgba(0, 0, 0, 0) 65%",
        }}
      />

      {/* Adding ring */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom,rgba(37, 56, 121,1) 0%,rgba(0,0,0,1) 25%,rgba(0, 0, 0, 0) 65%",
        }}
      /> */}

      <div className="w-full h-full grid grid-rows-[3fr_7fr] md:grid-rows-[2fr_8fr] lg:grid-rows-[2fr_8fr] relative">
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
          <div className="absolute top-1/2 left-1/2 -translate-1/2 w-[250px] h-[300px] md:w-[550px] md:h-[450px] xl:w-[600px] xl:h-[500px] mx-auto">
            <div className="relative w-[80%] h-[80%] md:w-[70%] md:h-[70%] top-1/2 left-1/2 -translate-1/2">
              <Image
                src="/mesh/circle-mesh.svg"
                alt="circle square mesh"
                fill
                className="object-contain"
              />
            </div>

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 250 300"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="gradient1" x1="50%" y1="0%" x2="100%" y2="50%">
                  <stop offset="0%" style={{ stopColor: "#96A1D8", stopOpacity: 0.15 }} />
                  <stop offset="66%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                  <stop offset="100%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                </linearGradient>

                <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#96A1D8", stopOpacity: 0.15 }} />
                  <stop offset="66%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                  <stop offset="100%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                </linearGradient>

                <linearGradient id="gradient3" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#96A1D8", stopOpacity: 0.15 }} />
                  <stop offset="66%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                  <stop offset="100%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                </linearGradient>

                <linearGradient id="gradient4" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#96A1D8", stopOpacity: 0.15 }} />
                  <stop offset="66%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                  <stop offset="100%" style={{ stopColor: "#3B5CFF", stopOpacity: 1.0 }} />
                </linearGradient>

                <marker
                  id="arrowhead1"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="#3B5CFF" fillOpacity="1" />
                </marker>
              </defs>

              {/* Curved arrow from User to Treasury (top to right) - outside circle */}
              <path
                d="M 150 39 Q 220 60 235 125"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead1)"
              />

              {/* Curved arrow from Treasury to Data (right to bottom) - outside circle */}
              <path
                d="M 235 175 Q 225 235 150 262"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead1)"
              />

              {/* Curved arrow from Data to Product (bottom to left) - outside circle */}
              <path
                d="M 103 264 Q 22 236 15 175"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead1)"
              />

              {/* Curved arrow from Product to User (left to top) - outside circle */}
              <path
                d="M 15 125 Q 30 60 100 38"
                fill="none"
                stroke="url(#gradient4)"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead1)"
              />
            </svg>

            {/* icon and name */}
            <div className="absolute text-[#CAD1F3] top-1/2 -left-[0%] md:left-[12%] -translate-1/2 flex justify-center items-center gap-2">
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-xs sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Product
              </p>
              <div className="rounded-full border-[1px] border-white/30 border-l-blue-800/35 border-b-blue-800/30">
                <div className="p-3 w-full h-full rounded-full backdrop-blur-[2px] relative">
                  <div className="relative w-6 h-6 xz:w-6 xz:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <Image src="/mesh/ai.svg" alt="ai icon" fill />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute text-[#CAD1F3] top-1/2 -right-[25%] md:-right-[2%] -translate-y-1/2 flex justify-center items-center gap-2">
              <div className="rounded-full border-[1px] border-white/30 border-l-blue-800/35 border-b-blue-800/30">
                <div className="p-3 w-full h-full rounded-full backdrop-blur-[2px] relative">
                  <div className="relative w-6 h-6 xz:w-6 xz:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <Image src="/mesh/treasury.svg" alt="data icon" fill />
                  </div>
                </div>
              </div>
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-xs sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Treasury
              </p>
            </div>
            <div className="absolute text-[#CAD1F3] top-1/10 lg:top-[12%] left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-xs sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                User
              </p>
              <div className="rounded-full border-[1px] border-white/30 border-l-blue-800/35 border-b-blue-800/30">
                <div className="p-3 w-full h-full rounded-full backdrop-blur-[2px] relative">
                  <div className="relative w-6 h-6 xz:w-6 xz:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <Image src="/mesh/user.svg" alt="user icon" fill />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute text-[#CAD1F3] -bottom-[15%] md:-bottom-[7%] left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-2">
              <div className="rounded-full border-[1px] border-white/30 border-l-blue-800/35 border-b-blue-800/30">
                <div className="p-3 w-full h-full rounded-full backdrop-blur-[2px] relative">
                  <div className="relative w-6 h-6 xz:w-6 xz:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10">
                    <Image src="/mesh/data.svg" alt="data icon" fill />
                  </div>
                </div>
              </div>
              <p
                className={`leading-[1.2] ${syne.className} text-xs xz:text-xs sm:text-base md:text-lg lg:text-xl font-semibold`}
              >
                Data
              </p>
            </div>

            {/* description */}
            <div
              className={`absolute text-[#CAD1F3] -left-3/12 top-[1%] md:top-1/8 md:left-0  text-right ${syne.className} text-xs lg:text-[1rem]`}
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
              className={`absolute text-[#CAD1F3] -left-3/12 bottom-[1%] md:bottom-1/12 md:left-0 text-right ${syne.className} text-xs lg:text-[1rem]`}
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
              className={`absolute text-[#CAD1F3] -right-3/12 top-[1%] md:top-1/8 md:-right-[0]  text-left ${syne.className} text-xs lg:text-[1rem]`}
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
              className={`absolute text-[#CAD1F3] -right-3/12 bottom-[1%] md:bottom-1/12 md:right-0 text-left ${syne.className} text-xs lg:text-[1rem]`}
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
