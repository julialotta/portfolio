import { FadeInAndUp } from "../animations/FadeInAndUp";
import { Project } from "./models/Project";

interface IPrintProjectProps {
  project: Project;
}

export const PrintProjects = (props: IPrintProjectProps) => {
  return (
    <FadeInAndUp>
      <div className='singleProjectContainer'>
        <img src={props.project.img} alt={props.project.title} />
        <h4>{props.project.title}</h4>
      </div>
    </FadeInAndUp>
  );
};
