import { courses } from "@/db/data";
import { CoursesProps } from "@/db/types";
import Link from "next/link";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Welcome to courseZilla courses, We Offer the Following Courses
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course: CoursesProps) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              className="bg-zinc-200 shadow-md rounded-2xl p-6 flex flex-col justify-between gap-4 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <Icon className="text-4xl text-blue-600" />
                <h2 className="text-lg font-semibold">{course.title}</h2>
              </div>

              <Link href={`/course/${course.title}`}>
                <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Explore Course
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
