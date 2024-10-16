import Image from "next/image";
import { FACILITIES_DATA } from "@/constants";
import { Facility } from "@/types";

const FacilityCard = ({ facility }: { facility: Facility }) => {
  const heightClass = facility.id % 2 === 0 ? "h-[365px]" : "h-[295px]";

  return (
    <div
      className={`relative border rounded-xl bg-slate-400 overflow-hidden shadow-lg transition-transform transform ${heightClass}`}
    >
      <div className={`relative h-full w-full overflow-hidden`}>
        <Image
          src={facility.image}
          alt={facility.title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 transform hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E80] to-[#002B3A00] pointer-events-none" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 text-white max-w-lg">
        <h3 className="text-xl font-semibold">{facility.title}</h3>
        <p className="text-gray-300 mt-1">{facility.description}</p>
      </div>
    </div>
  );
};

const FacilitiesSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-10 px-4">
      <div className="mx-auto max-w-[1440px] my-24">
        <h2 className="text-5xl text-left mb-12 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur{" "}
        </h2>
        <div className="columns-2 gap-4 lg:gap-6">
          <div className="space-y-6">
            {FACILITIES_DATA.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
