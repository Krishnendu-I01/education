
const HeaderSection = () => {
  return (
    <div className="relative w-full h-screen text-black">
      <img
        src="https://interman.in/assets/img/bgs/fullscreen-slider.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover"
      />
      {/* <div className="absolute inset-0 bg-black bg-opacity-60" /> */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10 ">
        {/* <img
          src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/649fb3d3-logo_1000000000000000000028.png"
          alt="Logo"
          className="text-xl font-bold flex items-center space-x-2"
        /> */}

        <nav className="absolute top-4 right-10 flex gap-4">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#courses" className="hover:text-blue-600">
            Our Courses
          </a>
          <a href="#team" className="hover:text-blue-600">
            Our Team
          </a>
          <a href="#students" className="hover:text-blue-600">
            Our Students
          </a>
        </nav>
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6 text-black">
        <p className="text-lg md:text-xl">LEARN WITH US</p>
        <h1 className="text-4xl md:text-6xl font-bold">STUDY WITH EXPERT</h1>
        <p className="max-w-xl md:text-lg ">
          This should be used to tell a story and let your users know a little
          more about your product or service. How can you benefit them?
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
          Choose Your Course
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        {[
          { title: "Data Analysis", tag: "+15", color: "bg-purple-500" },
          { title: "Graphic Design", tag: "+23", color: "bg-orange-500" },
          { title: "Mobile App", tag: "+18", color: "bg-green-500" },
          { title: "Photography", tag: "+12", color: "bg-blue-500" },
        ].map((course, idx) => (
          <div
            key={idx}
            className="bg-white backdrop-blur-md p-6 rounded-lg border border-white text-center w-40 relative"
          >
            <span
              className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${course.color}`}
            >
              {course.tag}
            </span>
            <div className="text-2xl mb-2"></div>
            <p className="text-sm font-semibold">{course.title}</p>
          </div>
        ))}
      </div>
      ;
    </div>
  );
};

export default HeaderSection;
