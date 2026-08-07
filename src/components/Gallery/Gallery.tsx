import Container from "../UI/Container/Container";
import { gallery } from "../../data/gallery";
import css from "./Gallery.module.css";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof gallery)[number] | null>(null);
  
  return (
    <section className={css.gallery} id="gallery">
      <Container>
        <div className={css.content}>
          <h2>Galéria</h2>
          <div className={css.grid}>
            {gallery.map((item) => (
              <img className={css.image}
                key={item.id}
                src={item.image}
                alt={item.alt}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>
      {selectedItem && (
      <Modal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onChange={(item) => setSelectedItem(item)}
      />
        )}
        </div>
      </Container>
    </section>
  );
}