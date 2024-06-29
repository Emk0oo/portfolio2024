"use client";

export default function NameSurnameLanding({ showPortfolio }: { showPortfolio: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
        showPortfolio ? "opacity-0 translate-y-full" : "opacity-100"
      }`}
    >
      <div className="text-center flex flex-col items-center justify-center">
        <p className="text-8xl font-thin">EMIR</p>
        <p className="text-8xl font-thin">JAVOR</p>
      </div>
    </div>
  );
}
