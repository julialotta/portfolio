import project from "../assets/img/JL01.png";
import cvtree from "../assets/cvtree.png";

function Main() {
  return (
    <main>
      <div className="pattern"></div>
      <div className="green"></div>
      <div className="categoryContainerOm">
        <h3>Om</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          veritatis esse error cum, pariatur eos quam, molestias commodi nostrum
          consequatur officiis beatae, doloremque quod dolorem at provident sit
          dolore aliquam?
        </p>
        <div className="images">
          <img src={cvtree} alt="Cv tree" />
          <img src={project} alt="Tingloef" />
        </div>
      </div>
      <div className="pattern"></div>
      <div className="red"></div>
      <div className="categoryContainerProjekt">
        <h3>Projekt</h3>
        <div className="category">
          <h4>Skolprojekt</h4>
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
        </div>
        <div className="category">
          <h4>Jobb</h4>
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
        </div>
        <div className="category">
          <h4>Egna projekt</h4>
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
          <img className="hero" src={project} alt="Tingloef" />
        </div>
      </div>
    </main>
  );
}

export default Main;
