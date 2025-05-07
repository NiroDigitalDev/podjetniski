import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stran v Vzdrževanju",
  description: "Naša stran trenutno poteka načrtovano vzdrževanje.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <div className="relative w-32 h-32 mb-8">
        <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-bold text-gray-900">
        Stran v Vzdrževanju
      </h1>

      <p className="max-w-md mb-8 text-lg text-gray-600">
        Trenutno izvajamo načrtovano vzdrževanje naše spletne strani. Prosimo,
        preverite kasneje!
      </p>
    </div>
  );
}
