
import { IconType } from "react-icons"

export type CoursesProps={
    id:number,
    title:string,
    icon:IconType
}


type Project = {
  id: number;
  title: string;
};

export type MainCourses = {
  id: number;
  title: string;
  slug:string,
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  projects: Project[];
};
