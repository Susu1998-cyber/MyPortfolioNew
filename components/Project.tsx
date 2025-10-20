import Image from "next/image";
import UserMgmntImg from "../assets/usermgmntimg.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent mb-6">
            My projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              href: "https://redux-crud-frontend.vercel.app/",
              src: UserMgmntImg,
              alt: "User Managment System",
              title: "User Managment System",
            },
          ].map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-amber-400/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <p className="text-white font-semibold text-sm md:text-base group-hover:text-amber-300 transition-colors duration-300">
                  {project.title}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-pink-400 transition-all duration-300 group-hover:w-full"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
