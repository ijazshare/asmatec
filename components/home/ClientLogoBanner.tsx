"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { clients } from "@/constants/clients";

export default function ClientLogoBanner() {
  return (
    <div className="w-full bg-white  border-gray-100 py-10 mb-10">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-20">
        ECOSYSTEMS WE SUPPORT
      </p>
      <Marquee gradient={false} speed={50}>
        {clients.map((client) => (
          <div
            key={client.name}
            className="mx-10 flex items-center justify-center"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={200}
              height={100}
              className="max-h-12 w-auto object-contain "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
