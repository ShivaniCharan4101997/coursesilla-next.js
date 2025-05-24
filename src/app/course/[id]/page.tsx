'use client';

import { useParams } from 'next/navigation';
import { mainCourses, courses } from '@/db/data';
import { HiOutlineClock, HiOutlineLightningBolt } from 'react-icons/hi'; 
import { FaCheckCircle } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation';

const Course = () => {
  const { id } = useParams();
  const router = useRouter();
  const courseSlug = Array.isArray(id) ? id[0] : id;

  const courseFromCourses = courses.find(
    (course) => course.title.toLowerCase() === courseSlug?.toLowerCase()
  );

  if (!courseFromCourses) {
    return <div className="p-4 text-red-600">Invalid course {courseSlug}</div>;
  }

  const course = mainCourses.find(
    (main) => main.slug.toLowerCase() === courseFromCourses.title.toLowerCase()
  );

  if (!course) {
    return (
      <div className="p-4 text-red-600">
        Course details not found for {courseFromCourses.title}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-xl w-full transition duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">{course.title}</h1>

        <div className="text-base text-gray-700 mb-4 space-y-2">
          <p className="flex items-center gap-2">
            <HiOutlineClock className="text-purple-600 text-lg" />
            <span className="font-semibold">Duration:</span> {course.duration}
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineLightningBolt className="text-yellow-500 text-lg" />
            <span className="font-semibold">Level:</span> {course.level}
          </p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Projects</h2>
        <ul className="space-y-2">
          {course.projects.map((project) => (
            <li
              key={project.id}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition duration-300"
            >
              <FaCheckCircle className="text-green-500" />
              {project.title}
            </li>
          ))}
        </ul> 
        <button className='mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300'
          onClick={() => router.push('/')}>Back to Courses</button>
      </div>
    </div>
  );
};

export default Course;
