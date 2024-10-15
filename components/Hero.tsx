import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-[889px] bg-cover bg-center">
      <Image
        src="/images/heroBanner.jpeg"
        alt="Hero Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E80] to-[#002B3A00]"></div>

      <div className="absolute bottom-0 left-0 p-10 md:p-16 lg:p-40 z-10 text-white text-left flex flex-col items-start justify-center">
        <div className="max-w-4xl w-full">
          <h1 className="text-2xl md:text-4xl font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="mt-8 text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis velit
            nulla. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
