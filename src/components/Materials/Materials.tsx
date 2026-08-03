import Container from "../UI/Container/Container";
import { materials } from "../../data/materials";
import css from "./Materials.module.css";

export default function Materials() {
  return (
    <section className={css.materials} id="materials">
      <Container>
        <h2 className={css.title}>Anyagok</h2>
        <p className={css.intro}>
          Gondosan válogatott anyagokból készítem minden egyes ékszert.
        </p>

        <div className={css.grid}>
          {materials.map((material) => (
            <article className={css.card} key={material.id}>
              <img
                src={material.image}
                alt={material.title}
              />

              <h3>{material.title}</h3>

              <p>{material.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}