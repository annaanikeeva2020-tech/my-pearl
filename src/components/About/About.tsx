import Container from "../UI/Container/Container";
import css from "./About.module.css";

export default function About() {
  return (
    <section className={css.about} id="about">
      <Container>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <img
              src="/images/about/about.jpg"
              alt="Kézzel készített ékszerek"
            />
          </div>

          <div className={css.text}>
            {/* <p className={css.subtitle}>Rólam</p> */}

            <h2>Hogyan kezdődött minden?</h2>

            <p>
              A kézzel készített ékszerek iránti szeretetem egy egyszerű
              ötlettel kezdődött. Szerettem volna olyan darabokat készíteni,
              amelyek nemcsak szépek, hanem személyes jelentéssel is bírnak.
            </p>

            <p>
              Minden karkötőt és medált saját kezűleg készítek, nagy
              odafigyeléssel és szeretettel.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}