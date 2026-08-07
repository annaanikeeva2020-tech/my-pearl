
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
            <h2 className={css.title}>Az én gyöngyöm</h2>
            <a className={css.facebook} href="https://www.facebook.com/erzsebet.lajter.1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook">
              <FaFacebookF />
            </a>
          </div>

          <div className={css.contacts}>
            <h3>Kapcsolat</h3>
            <a href="mailto:info@azenigyongyom.hu">info@azenigyongyom.hu</a>
            <a href="tel:+3612345678">+36 12 345 678</a>
            <p>Magyarország</p>
          </div>

          <div className={css.message}>
            <p>Köszönöm, hogy meglátogattad
              az oldalamat.
            </p>
            <p>
              Minden ékszert szeretettel
              és odafigyeléssel készítek.
            </p>
          </div>
        </div>
        <div className={css.copy}>© 2026 Az én gyöngyöm</div>
      </Container>
    </footer>
  );
}