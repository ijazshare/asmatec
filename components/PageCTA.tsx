import Link from "next/link";

interface PageCTAProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
}

export default function PageCTA({
  title,
  description,
  buttonText,
  buttonHref = "/contact",
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0A1A2F] via-[#0d2a4a] to-[#0A1A2F] text-center px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-[#94a3b8] text-[15px] mb-8">{description}</p>
        )}
        <Link
          href={buttonHref}
          className="inline-block border border-[#3b82f6] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#3b82f6] transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
