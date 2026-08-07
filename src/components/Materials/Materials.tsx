import Container from "../UI/Container/Container";
import { materials } from "../../data/materials";
import css from "./Materials.module.css";

export default function Materials() {
  return (
    <section className={css.materials} id="materials">
      <Container>
        <h2 className={css.title}>Miért különlegesek ékszereim?</h2>
        <p className={css.intro}>
          Gondosan válogatott anyagokból készítek minden egyes ékszert.
        </p>
        <div className={css.grid}>
          {materials.map((material) => {
            const Icon = material.icon;

            return (
              <article className={css.card} key={material.id}>
                <Icon className={css.icon} />
                <h3>{material.title}</h3>
                <p>{material.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}