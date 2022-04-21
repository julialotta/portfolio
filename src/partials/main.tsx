import project from "../assets/img/JL01.png";

function Main() {
  return (
    <main>
      <p>Lorem ipsum</p>
      <div className="pattern"></div>
      <div className="green"></div>
      <div className="categoryContainer">
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
