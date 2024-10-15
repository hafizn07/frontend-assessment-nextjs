import VideoPlayer from "@/components/VideoPlayer";

const VideoSection = () => {
  return (
    <section className="mx-auto max-w-[1440px] my-[100px] px-4 py-10">
      <VideoPlayer
        thumbnail="/images/video-thumbnail.jpeg"
        videoSrc="https://www.youtube.com/embed/yB4iJwxS-NE"
        title="Lorem ipsum dolor sit amet."
        content={
          <>
            <p className="text-lg">Sanchez Alexis</p>
            <p className="text-sm">CEO & Founder of Demo</p>
          </>
        }
      />

      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className="mt-10 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
            convallis accumsan, nibh odio gravida felis, vitae mollis massa
            lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum
            molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget
            velit interdum, non dapibus nisi fringilla. Mauris fermentum
            venenatis volutpat. Quisque efficitur ultricies erat eget rutrum.
            Phasellus feugiat quam eget est dapibus, non eleifend justo
            fermentum. Sed et commodo arcu, id euismod dui.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="border-l-4 pl-4 border-gray-300">
            <h3 className="text-2xl font-semibold">Lorem Ipsum</h3>
            <p className="mt-2 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
          <hr className="my-4 border-t border-gray-300" />
          <div className="border-l-4 pl-4 border-gray-300">
            <h3 className="text-2xl font-semibold">Lorem Ipsum</h3>
            <p className="mt-2 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. In hac habitasse platea dictumst. Fusce non
              venenatis velit. Proin luctus malesuada mauris vitae mattis.
              Pellentesque iaculis elit lorem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
