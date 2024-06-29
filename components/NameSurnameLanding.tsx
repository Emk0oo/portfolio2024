"use client";

export default function NameSurnameLanding({ showPortfolio }: { showPortfolio: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        showPortfolio ? "opacity-0" : "opacity-100"
      } z-10`}
    >
      <div className="text-center flex flex-col items-center justify-center">
        <p className="text-8xl font-bold">EMIR</p>
        <p className="text-8xl font-bold">JAVOR</p>
      </div>
    </div>
  );
}
