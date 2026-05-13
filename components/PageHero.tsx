interface PageHeroProps {
  title: string;
  description: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="bg-[#0A1A2F] py-20 md:py-28 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          {title}
        </h1>
        <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}
