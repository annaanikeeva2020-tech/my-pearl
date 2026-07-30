import Container from "../UI/Container/Container";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <a className={css.logo} href="/">
            Az én gyöngyöm
          </a>

          <nav className={css.nav} aria-label="Fő navigáció">
            <a href="#about">Rólam</a>
            <a href="#gallery">Galéria</a>
            <a href="#materials">Anyagok</a>
            <a href="#reviews">Vélemények</a>
          </nav>

          <a className={css.contact} href="#contact">
            Kapcsolat
          </a>
        </div>
      </Container>
    </header>
  );
}