import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="neo-brutalist-card p-6">
      <h3 className="mb-4 font-bold">SOCIALNA OMREŽJA</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="https://www.instagram.com/podjetniski.klub.fmf/"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutalist-btn-secondary flex items-center justify-center py-3 no-underline hover:no-underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          INSTAGRAM
        </Link>
      </div>
    </div>
  );
}
