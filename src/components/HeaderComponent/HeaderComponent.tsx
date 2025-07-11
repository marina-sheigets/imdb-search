import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header-component">
      <Heading variant="h1" color="primary" shadow text="TMDB Movie Search" />
      <Paragraph text="Search for movies, TV shows, and more!" size="large"/>
    </header>
  );
}

export default HeaderComponent;
