import Container from "../UI/Container/Container";
import css from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import lotusLogo from "../../assets/logo/lotus.svg";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.content}>

          <div className={css.brand}>
          <img src={lotusLogo} alt="Az én gyöngyöm" className={css.logoIcon}/>
          </div>

          <h2 className={css.title}>
            Az én gyöngyöm
          </h2>

          <p className={css.text}>
            Kézzel készült karkötők és medálok szeretettel.
          </p>

          <a className={css.facebook} href="https://www.facebook.com/erzsebet.lajter.1" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
          </a>

          <span className={css.copy}>
            © 2026 Az én gyöngyöm
          </span>

        </div>
      </Container>
    </footer>
  );
}