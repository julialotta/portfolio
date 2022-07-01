import bird from "../../assets/bird.png";

function Header() {
  return (
    <header>
      <img className='bird' src={bird} alt='bird' />
      <h1>Anette Hammargren Wiberg</h1>
    </header>
  );
}

export default Header;
