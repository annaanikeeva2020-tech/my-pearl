import Container from "../UI/Container/Container";
import css from "./About.module.css";

export default function About() {
  return (
    <section className={css.about} id="about">
      <Container>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <img src="/images/about/about.jpg" alt="Kézzel készített ásvány karkötők és egyedi ékszerek"/>
          </div>
          <div className={css.text}>
            <h2>Hogyan kezdődött minden?</h2>
            <p>
              A kézzel készített ékszerek és a természetes kövek iránti szeretetem egy egyszerű ötlettel kezdődött. Olyan egyedi darabokat szerettem volna készíteni, amelyek nemcsak szépek, hanem személyes jelentéssel is bírnak.
            </p>
            <p>
              Minden ásvány karkötőt és medált saját kezűleg készítek, gondosan válogatott kövekből és gyöngyökből, nagy odafigyeléssel és szeretettel. Hiszem, hogy egy kézzel készített ékszer nem csupán kiegészítő, hanem egy apró darab szépség, amely különlegesebbé teheti a mindennapokat.
            </p>

            <img
              src="/images/about/branch.png"
              alt=""
              className={css.branch}
            />
            
          </div>
        </div>
      </Container>
    </section>
  );
}