import Image from "next/image";

export default function Ring() {
  return (
    <section className="w-full h-[50vh] flex justify-center items-center relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top,rgba(37, 56, 121,1) 0%,rgba(0,0,0,0) 75%)",
        }}
      />
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
