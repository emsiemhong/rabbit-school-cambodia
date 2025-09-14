"use client";

import Link from "next/link";
import { Button } from "./button";
import { Heart, ArrowRight } from "lucide-react";
import { forwardRef } from "react";

interface DonationLinkProps {
  text?: string;
  className?: string;
  mobile?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const DonationLink = forwardRef<HTMLAnchorElement, DonationLinkProps>(
  ({
    text = "Donate",
    className = "",
    mobile = false,
    variant = "primary",
    size = "md"
  }, ref) => {
    // Base styles following your Earth brown brand guidelines
    const getVariantStyles = () => {
      switch (variant) {
        case "primary":
          return "bg-[#623D3C] hover:bg-[#623D3C]/90 text-white shadow-lg hover:shadow-xl";
        case "secondary":
          return "bg-[#FFD45F] hover:bg-[#FFD45F]/90 text-[#623D3C] shadow-md hover:shadow-lg";
        case "outline":
          return "border-2 border-[#623D3C] text-[#623D3C] hover:bg-[#623D3C] hover:text-white bg-transparent";
        default:
          return "bg-[#623D3C] hover:bg-[#623D3C]/90 text-white shadow-lg hover:shadow-xl";
      }
    };

    const getSizeStyles = () => {
      switch (size) {
        case "sm":
          return "px-4 py-2 text-sm";
        case "md":
          return "px-6 py-3 text-base";
        case "lg":
          return "px-8 py-4 text-lg";
        default:
          return "px-6 py-3 text-base";
      }
    };

    const getMobileStyles = () => {
      if (mobile) {
        return "w-full";
      }
      return "sm:inline-flex";
    };

    const getFocusStyles = () => {
      switch (variant) {
        case "secondary":
          return "focus:ring-[#FFD45F]";
        case "outline":
          return "focus:ring-[#623D3C]";
        default:
          return "focus:ring-[#623D3C]";
      }
    };

    const buttonStyles = [
      // Base styles
      "group inline-flex items-center justify-center gap-3 font-semibold rounded-full",
      "transition-all duration-300 ease-out transform",
      "hover:scale-[1.02] active:scale-[0.98]",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
      // Variant styles
      getVariantStyles(),
      // Size styles
      getSizeStyles(),
      // Mobile/responsive styles
      getMobileStyles(),
      // Focus styles
      getFocusStyles(),
      // Custom className
      className
    ].filter(Boolean).join(" ");

    return (
      <Button
        asChild
        className={buttonStyles}
      >
        <Link
          href="/donate"
          ref={ref}
          className="flex items-center justify-center gap-3 w-full h-full"
          aria-label={`${text} - Support The Rabbit School's mission`}
        >
          {/* Icon with animation */}
          <Heart
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />

          {/* Text */}
          <span className="font-semibold">
            {text}
          </span>

          {/* Arrow icon that appears on hover */}
          <ArrowRight
            className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
            aria-hidden="true"
          />
        </Link>
      </Button>
    );
  }
);

DonationLink.displayName = "DonationLink";

export default DonationLink;