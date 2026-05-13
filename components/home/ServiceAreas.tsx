const areas = ["New York", "New Jersey", "Pennsylvania"];

const ServiceAreas = () => {
  return (
    <section className="w-full py-20 md:py-24 bg-[#eef1f6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f2137] mb-3">
          Service Areas
        </h2>
        <p className="text-[#94a3b8] text-sm mb-10">
          Businesses we proudly serve across the tri-state area.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <div
              key={area}
              className="px-8 py-3 bg-white rounded-lg border border-[#e2e8f0] shadow-sm"
            >
              <span className="text-md font-semibold text-[#0f2137]">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
