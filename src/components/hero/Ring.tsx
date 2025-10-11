import Image from "next/image";

export default function Ring() {
  return (
    <section className="w-full h-[50vh] flex justify-center items-center relative bg-white">
      <div
        className="absolute inset-[-1] pointer-events-none"
        style={{
          background: "linear-gradient(to top,rgba(37, 56, 121,1) 0%,rgba(0,0,0,0) 60%)",
        }}
      />
      <div className="w-[25vh] h-[25vh] md:w-[35vh] md:h-[35vh] relative">
        <Image
          src="/icon/rings.png"
          alt="ring icon"
          fill
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
