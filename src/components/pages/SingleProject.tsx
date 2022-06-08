import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { projectsArray } from "../../data/projects";

export const SingleProject = () => {
  let params = useParams();

  useEffect(() => {
    console.log(params.id);
  });

  /* console.log(projectsArray);

  
  for (let i = 0; i < projectsArray.length; i++) {
    if (params.id == projectsArray.key.toString()) {
      console.log("====================================");
      console.log("hej");
      console.log("====================================");
    }
  } */

  return <>Project: {params.id}</>;
};
