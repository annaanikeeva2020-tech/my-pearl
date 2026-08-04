import Container from "../UI/Container/Container";
import css from "./Header.module.css";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className={css.header}>
      <Container>
        <div className={css.inner}>
          <a className={css.logo} href="/">
    <img src="/images/logo-lotus.svg" alt="" className={css.logoIcon}/>
    <span>Az én gyöngyöm🌸</span>
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
    <button className={css.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu">
        {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
    </button>
        </div>
      </Container>
    </header>
  );
}