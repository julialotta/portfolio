import { Project } from "./models/Project";

interface IPrintProjectProps {
  project: Project;
}

export const PrintProjects = (props: IPrintProjectProps) => {
  return (
    <div className='singleProjectContainer'>
      <img src={props.project.img} alt={props.project.title} />
      <h4>{props.project.title}</h4>
    </div>
  );
};
