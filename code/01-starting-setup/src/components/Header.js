import keyConceptsImage from '../assets/images/key-concepts.png';

function Header(props) {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </header>
  );
}

export default Header;