import css from "./Modal.module.css";
import { gallery } from "../../../data/gallery";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useCallback } from "react";

interface ModalProps {
  item: (typeof gallery)[number];
  onClose: () => void;
  onChange: (item: (typeof gallery)[number]) => void;
}

export default function Modal({
  item,
  onClose,
  onChange,
}: ModalProps) {

  const currentIndex = gallery.findIndex(
    (galleryItem) => galleryItem.id === item.id
  );

const showPrevious = useCallback(() => {
    const index =
      currentIndex === 0
        ? gallery.length - 1
        : currentIndex - 1;

        onChange(gallery[index]);
    }, [currentIndex, onChange]);

const showNext = useCallback(() => {
    const index =
      currentIndex === gallery.length - 1
        ? 0
        : currentIndex + 1;

    onChange(gallery[index]);
  }, [currentIndex, onChange]);

    useEffect(() => {
const handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA"
  ) {
    return;
  }
    if (event.key === "Escape") {
      onClose();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "";
  };
    }, [onClose, showPrevious, showNext]);
    
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>

        <button type="button" className={css.close} onClick={onClose}>
          ✕
        </button>

        <button type="button" className={css.prev} onClick={showPrevious}>
          <FiChevronLeft />
        </button>

        <button type="button" className={css.next} onClick={showNext}>
          <FiChevronRight />
        </button>

        <img src={item.image} alt={item.alt} className={css.image}/>

        <h2>{item.title}</h2>

        <p>{item.description}</p>

        <h3>Anyagok</h3>

        <ul>
          {item.materials.map((material) => (
            <li key={material}>
              {material}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}