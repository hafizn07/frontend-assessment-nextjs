import { SERVICE_DATA } from "@/constants";

const Card = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-[#ECFAFF] p-5 md:p-9 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#002A3A] hover:text-white">
      <div className="flex flex-col gap-3 md:gap-5">
        <h3 className="text-2xl md:text-3xl font-bold">{number}</h3>
        <hr className="my-2 border-t-2 border-gray-400" />
        <h4 className="text-2xl md:text-3xl font-semibold">{title}</h4>
        <p className="text-base md:text-lg mt-2">{description}</p>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="mx-auto max-w-[1440px] my-[60px] sm:my-[100px] px-4 py-10">
      <div className="max-w-2xl mb-16">
        <h2 className="text-5xl text-left mb-7 max-w-xl">Lorem Ipsum</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>

      <div className="column-1 sm:columns-3 gap-5">
        <div className="space-y-6">
          {SERVICE_DATA.map((service) => (
            <Card
              key={service.id}
              number={`0${service.id}`}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
