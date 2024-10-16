import Image from "next/image";

const Contact = () => {
  return (
    <section className="relative bg-cover bg-center px-4 py-10">
      <Image
        src="/images/planning.png"
        alt="Hero Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-[#002A3ACC]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white">
        <div className="md:max-w-[60%]">
          <h2 className="text-5xl font-semibold">Let’s work Together</h2>
          <p className="mt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
            tristique euismod arcu tristique nisl id nibh. Viverra feugiat
            viverra. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-0">
          <button className="bg-white text-[#002A3A] font-semibold py-3 px-8 rounded shadow hover:bg-gray-200 transition">
            View Vacancies
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
