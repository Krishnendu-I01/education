


const courseData = [
  {
    title: "Basic Marketing",
    instructor: "Mark Smith",
    price: "Free",
    image:
      "https://www.upskillist.com/static/ff38b23e3ba793a7d78bb5bb8fbc8c31/471f5/website-wide.png",
    lessons: 12,
    hours: 18,
  },
  {
    title: "Business English",
    instructor: "Vera Duncan",
    price: "$30",
    image:
      "https://t4.ftcdn.net/jpg/01/00/10/83/360_F_100108325_4Ui6nYvoVkT1Wou0KE5XLsdaGNuoZsmT.jpg",
    lessons: 18,
    hours: 25,
  },
  {
    title: "IT Foundations",
    instructor: "Cooper Moore",
    price: "$60",
    image:
      "https://img.freepik.com/free-photo/diverse-group-students-taking-online-tests_74855-1805.jpg?semt=ais_hybrid&w=740",
    lessons: 20,
    hours: 11,
  },
];


const CourseCard = ({ course }: { course: (typeof courseData)[0] }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md w-full  max-w-sm max-h-90">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <span className="absolute top-3 left-3 bg-red-600 text-white text-sm px-3 py-1 rounded">
        {course.price}
      </span>
    </div>
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-900">{course.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{course.instructor}</p>
      <p className="text-sm text-gray-700 mb-4">
        This should be used to tell a story and let your users know a little
        more about your product or service. How can you benefit them?
      </p>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-1">
          
          <span>{course.lessons} Lessons</span>
        </div>
        <div className="flex items-center gap-1">
          
          <span>{course.hours} Hours</span>
        </div>
      </div>
    </div>
  </div>
);

export default function CourseGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      {courseData.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}

      <div className="relative h-[80vh] w-full flex flex-col items-center justify-center text-center px-4 space-y-6">
        <img
          src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/c8c29177-cta-bg_100000000000000000001o.jpg"
          alt="image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-black px-4 space-y-6">
          <p className="text-lg md:text-xl">LEARN EASIER</p>
          <h1 className="text-4xl md:text-6xl font-bold">WE CAN TEACH YOU !</h1>
          <p className="max-w-xl md:text-lg">
            This should be used to tell a story and let your users know a little
            more about your product or service. How can you benefit them?
          </p>
        </div>
      </div>
    </div>
  );
}
