import { PrintProjects } from "./PrintProjects";
import { projectsArray } from "../data/projects";

export const Projects = () => {
  let html = projectsArray.map((project, i) => {
    return <PrintProjects key={i} project={project}></PrintProjects>;
  });

  return <>{html}</>;
};
