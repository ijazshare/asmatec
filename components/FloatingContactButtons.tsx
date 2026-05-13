"use client";

import React, { useState } from "react";
import { Phone, X } from "lucide-react";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const FloatingContactButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = "+15169534567";
  const whatsappNumber = "15169534567"; // No '+' for WhatsApp link

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="fixed bottom-24 right-6 z-9999 flex flex-col items-end gap-4">
      {/* Hidden Buttons Container */}
      <div
        className={cn(
          "flex flex-col gap-4 transition-all duration-500 ease-in-out origin-bottom scale-90 opacity-0 pointer-events-none",
          isExpanded &&
            "scale-100 opacity-100 translate-y-0 pointer-events-auto",
        )}
      >
        {/* Messenger Button */}
        <a
          href="https://www.facebook.com/share/1Adj6vbLU1/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on Messenger"
          className="group relative flex items-center"
        >
          <span className="absolute right-full mr-3 px-3 py-1 bg-white text-[#0084FF] text-sm font-semibold rounded-lg shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-blue-100">
            Message Us
          </span>
          <div
            className={cn(
              "flex items-center justify-center w-14 h-14 bg-[#0084FF] text-white rounded-full shadow-lg",
              "hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out",
            )}
          >
            <FaFacebookMessenger
              size={26}
              className="drop-shadow-sm transition-transform group-hover:scale-110"
            />
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="group relative flex items-center"
        >
          <span className="absolute right-full mr-3 px-3 py-1 bg-white text-[#25D366] text-sm font-semibold rounded-lg shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-green-100">
            WhatsApp Us
          </span>
          <div
            className={cn(
              "flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg",
              "hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out",
            )}
          >
            <FaWhatsapp
              size={26}
              className="drop-shadow-sm transition-transform group-hover:scale-110"
            />
          </div>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call us now"
          className="group relative flex items-center"
        >
          <span className="absolute right-full mr-3 px-3 py-1 bg-white text-[#f7972a] text-sm font-semibold rounded-lg shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-blue-100">
            Call Now
          </span>
          <div
            className={cn(
              "flex items-center justify-center w-14 h-14 bg-[#f7972a] text-white rounded-full shadow-lg",
              "hover:scale-110 hover:shadow-xl transition-all duration-300 ease-in-out",
            )}
          >
            <Phone
              size={24}
              fill="currentColor"
              className="stroke-none transition-transform group-hover:scale-110"
            />
          </div>
        </a>
      </div>

      {/* Main Support Toggle Button */}
      <button
        onClick={toggleExpanded}
        aria-expanded={isExpanded}
        aria-label={
          isExpanded ? "Close contact options" : "Open contact options"
        }
        className="group relative flex items-center outline-none"
      >
        <span
          className={cn(
            "absolute right-full mr-3 px-3 py-1 bg-white text-[#1a2e4a] text-sm font-semibold rounded-lg shadow-md opacity-0 -translate-x-2 transition-all duration-300 whitespace-nowrap pointer-events-none border border-slate-100",
            !isExpanded && "group-hover:opacity-100 group-hover:translate-x-0",
          )}
        >
          Support
        </span>
        <div
          className={cn(
            "flex cursor-pointer items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 ease-in-out animate-soft-pulse-blue",
            isExpanded
              ? "bg-slate-800 rotate-180 scale-90 shadow-inner"
              : "bg-[#1E81EF] hover:bg-[#1E81EF]/90 hover:scale-110",
          )}
        >
          {isExpanded ? (
            <X
              size={24}
              className="text-white transition-all duration-500 animate-in fade-in zoom-in"
            />
          ) : (
            <Phone
              size={24}
              className="text-white transition-all duration-500 animate-in fade-in zoom-in"
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default FloatingContactButtons;
