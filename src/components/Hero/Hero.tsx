import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.content}>
          <div className={css.text}>
            <p className={css.subtitle}>Kézzel készített ékszerek</p>

            <h1 className={css.title}>
              Egy kis darab szépség,
              <br />
              amit magaddal vihetsz.
            </h1>

            <p className={css.description}>
              Egyedi, kézzel készített karkötők és medálok
              szeretettel, gondosan válogatott anyagokból.
            </p>

            <a href="#gallery">
            <Button type="button">
              Fedezd fel a kollekciót
              </Button>
            </a>
          </div>

          <div className={css.imageWrapper}>
            <img
              src="/images/hero/hero-main.webp"
              alt="Kézzel készített karkötők"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}