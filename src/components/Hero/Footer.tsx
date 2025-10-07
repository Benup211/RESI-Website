export default function Footer() {
  return (
    <footer className="w-full h-screen px-6 py-8 lg:px-12 lg:py-8">
      <div className="grid grid-rows-[9fr_1fr] h-full">
        <div className="grid h-full lg:grid-cols-[7fr_3fr] lg:h-full">
          <div className="order-1 lg:order-2 bg-rose-600 h-auto lg:h-full">
            <div className="p-6 text-white">Right Section (3fr)</div>
          </div>

          <div className="order-2 lg:order-1 bg-rose-400 h-auto lg:h-full">
            <div className="p-6 text-black">Left Section (7fr)</div>
          </div>
        </div>

        <div className="bg-red-900 flex items-center justify-center text-white">
          Bottom Footer (1fr)
        </div>
      </div>
    </footer>
  );
}
