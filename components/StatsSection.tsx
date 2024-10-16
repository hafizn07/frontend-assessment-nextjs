import { STATS } from "@/constants";
import StatsCounter from "./StatsCounter";

const StatsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.id}
            className="flex items-center justify-center md:justify-around text-center"
          >
            <div>
              <StatsCounter
                value={stat.value}
                hasPlus={stat.hasPlus}
                className="text-5xl font-bold"
              />
              <p className="text-lg font-medium mt-2">{stat.label}</p>
            </div>
            {index < STATS.length - 1 && (
              <div className="hidden md:block h-28 border-r-2 border-gray-300 mx-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
