import Image from "next/image";

export default function Ring() {
  return (
    <section className="w-full h-[50vh] flex justify-center items-center relative">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-[#D9D9D9] to-[#3B54CD]" /> */}
      <div className="w-[35vh] h-[35vh] relative">
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
