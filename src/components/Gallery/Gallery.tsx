import Container from "../UI/Container/Container";
import { gallery } from "../../data/gallery";
import css from "./Gallery.module.css";

export default function Gallery() {
  return (
    <section className={css.gallery} id="gallery">
      <Container>
        <div className={css.content}>
          <h2>Galéria</h2>

          <div className={css.grid}>
            {gallery.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}