import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={css.modal}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className={css.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Bezárás"
        >
          ×
        </button>

        <h2>Írj nekem</h2>

        <form className={css.form}>
          <label>
            Neved
            <input type="text" name="name" />
          </label>

          <label>
            Elérhetőséged
            <input type="text" name="contact" />
          </label>

          <label>
            Üzeneted
            <textarea name="message" />
          </label>

          <button className={css.submitButton} type="submit">
            Küldés
          </button>
        </form>
      </div>
    </div>
  );
}