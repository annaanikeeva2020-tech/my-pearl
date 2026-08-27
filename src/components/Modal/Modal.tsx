import { useState } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

export default function Modal({ onClose }: ModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.target;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xgawavok",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setIsSent(true);
        form.reset();
      } else {
        setError(
          "Sajnos nem sikerült elküldeni az üzenetet. Kérlek, próbáld újra."
        );
      }
    } catch {
      setError(
        "Hiba történt az üzenet küldésekor. Kérlek, próbáld újra."
      );
    } finally {
      setIsSending(false);
    }
  };

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
          ✕
        </button>

        {!isSent ? (
          <>
            <h2>Írj nekem</h2>

            <form
              className={css.form}
              onSubmit={handleSubmit}
            >
              <label>
                Neved
                <input
                  type="text"
                  name="name"
                  placeholder="Neved"
                  required
                />
              </label>

              <label>
                Elérhetőséged (telefonszámod)
                <input
                  type="tel"
                  name="contact"
                  placeholder="+3612345678"
                  required
                />
              </label>

              <label>
                További információk
                <textarea
                  name="message"
                  rows={3}
                  onChange={handleMessageChange}
                />
              </label>

              <input
                type="hidden"
                name="_subject"
                value="Új üzenet az Az én gyöngyöm oldalról"
              />

              {error && (
                <p className={css.errorMessage}>
                  {error}
                </p>
              )}

              <button
                className={css.submitButton}
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Küldés..." : "Küldés"}
              </button>
            </form>
          </>
        ) : (
          <div className={css.successMessage}>
            <h2>Köszönöm! 💛</h2>

            <p>
              Üzeneted sikeresen elküldve.
            </p>

            <p>
              Hamarosan felveszem veled a kapcsolatot.
            </p>

            <button
              className={css.submitButton}
              type="button"
              onClick={onClose}
            >
              Bezárás
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
