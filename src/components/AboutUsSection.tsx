

const AboutUsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <img
          className="w-auto h-auto object-contain"
          src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/def6af6a-about-us-image.jpg"
          alt="Student"
        />
      </div>

      <div className="w-full lg:w-1/2">
        <h4 className="text-red-600 font-semibold text-lg mb-2">About Us</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          We provide many courses
        </h2>
        <p className="text-gray-600 mb-6">
          This should be used to tell a story and let your users know a little
          more about your product or service. How can you benefit them?
        </p>
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
          <div> Online Education</div>
          <div> Hands-on Research</div>
          <div> Unlimited Access</div>
          <div> Dedicated to Your Success</div>
          <div> Certified Teachers</div>
          <div> Classic Experience</div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
