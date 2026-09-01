import Container from "../UI/Container/Container";
import { gallery } from "../../data/gallery";
import css from "./Gallery.module.css";
import { useState } from "react";
import Modal from "../UI/Modal/Modal";

const ITEMS_PER_PAGE = 6;

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<
    (typeof gallery)[number] | null
  >(null);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(gallery.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = gallery.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className={css.gallery} id="gallery">
      <Container>
        <div className={css.content}>
          <h2>Galéria</h2>

          <div className={css.pagination}>
            <button
              className={css.arrowButton}
              type="button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              aria-label="Előző oldal"
            >
              ←
            </button>

            <div className={css.pageNumbers}>
              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1;

                return (
                  <button
                    key={page}
                    className={`${css.pageButton} ${
                      currentPage === page ? css.activePage : ""
                    }`}
                    type="button"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              className={css.arrowButton}
              type="button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              aria-label="Következő oldal"
            >
              →
            </button>
          </div>

          <div className={css.grid}>
            {currentItems.map((item) => (
          <article
            className={css.card}
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
          <div className={css.imageWrapper}>
          <img
            className={css.image}
            src={item.image}
            alt={item.alt}
          />
          </div>

      <div className={css.cardContent}>
      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <span className={css.more}>További részletek →</span>
      </div>
         </article>
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