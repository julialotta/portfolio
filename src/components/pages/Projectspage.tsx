import { Projects } from "../Projects";
export const Projectspage = () => {
  return (
    <div className='projectPage'>
      <div className='projectPageContainer'>
        <div className='projectsParentContainer'>
          <h2 className='title'>Projects</h2>
          <div className='projectsContainer'>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};
