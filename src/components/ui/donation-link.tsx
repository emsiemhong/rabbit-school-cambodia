import Link from "next/link";
import { Button } from "./button";
import { FaHandHoldingHeart } from "react-icons/fa";

export default function DonationLink({ text, className, mobile }: { text?: string, className?: string, mobile?: boolean }) {
  return (
    <Button
      asChild
      className={
        `flex items-center justify-center bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition-colors py-2 ${mobile ? "w-full mt-3 mb-4" : "hidden md:inline-flex"} ${className}`
      }
    >
      <Link
        href="/donate"
      >
        <span className="flex items-center gap-2">
          <FaHandHoldingHeart className="text-lg" />
          <span>{text}</span>
        </span>
      </Link>
    </Button>
  );
}