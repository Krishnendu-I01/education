

const teamMembers = [
  {
    name: "Mark Smith",
    title: "Designer",
    image:
      "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/03726d32-image-1.jpg",
  },
  {
    name: "Vera Duncan",
    title: "Web Developer",
    image:
      "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/9cf14cfd-image-2-.jpg",
  },
  {
    name: "Bryce Vaughn",
    title: "Professor",
    image:
      "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/educa1/63baac61-image-3-.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <p className="text-red-500 font-medium">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
          The Best Tutors in Town
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          This should be used to tell a story and let your users know a little
          more about your product or service. How can you benefit them?
        </p>
        <div className="mt-4">
          <span className="block w-10 h-1 bg-gray-300 mx-auto rounded-full"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-100 text-center p-6 rounded shadow-sm"
          >
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 rounded"
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
