

const Header = () => {
  return (
    <div>
      <img
        className="w-full h-full object-cover bg-opacity-60"
        src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/de833230-header-bg_100000000000000000001o.jpg"
        alt="img"
      />

      <nav className="absolute top-4 right-50 flex space-x-4">
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
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 space-y-6 ">
        <p className="text-3xl">LEARN WITH US</p>
        <p className="text-6xl">STUDY WITH EXPERTS</p>
        <p className="text-2xl">
          This should be used to tell a story and let your users know a little
          more about
        </p>
        <p className="text-2xl">
          your product or service. How can you benefit them?
        </p>
      </div>
    </div>
  );
}


<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
  {[
    { title: "Data Analysis", tag: "+15", color: "bg-purple-500" },
    { title: "Graphic Design", tag: "+23", color: "bg-orange-500" },
    { title: "Mobile App", tag: "+18", color: "bg-green-500" },
    { title: "Photography", tag: "+12", color: "bg-blue-500" },
  ].map((course, idx) => (
    <div
      key={idx}
      className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 text-center w-40 relative"
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
</div>;

export default Header