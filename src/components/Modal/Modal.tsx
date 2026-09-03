
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

    if (isSending) {
      return;
    }

    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam protection.
    // Normal users never see or fill this field.
    const honeypot = formData.get("_gotcha");

    if (honeypot) {
      return;
    }

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("contact") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Name validation
    if (name.length < 2) {
      setError("Kérlek, add meg a neved.");
      return;
    }

    if (name.length > 50) {
      setError("A név legfeljebb 50 karakter lehet.");
      return;
    }

    // Phone validation
    // Allows numbers, spaces, +, -, and parentheses.
    const phonePattern = /^\+?[0-9\s()-]{7,25}$/;

    if (!phonePattern.test(phone)) {
      setError(
        "Kérlek, adj meg egy érvényes telefonszámot."
      );
      return;
    }

    // Message validation
    if (message.length > 1000) {
      setError(
        "Az üzenet legfeljebb 1000 karakter lehet."
      );
      return;
    }

    setIsSending(true);

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
                  minLength={2}
                  maxLength={50}
                  required
                  autoComplete="name"
                />
              </label>

              <label>
                Elérhetőséged (telefonszámod)
                <input
                  type="tel"
                  name="contact"
                  placeholder="+3612345678"
                  pattern="[+]?[0-9\s()-]{7,25}"
                  maxLength={25}
                  required
                  autoComplete="tel"
                />
              </label>

              <label>
                További információk
                <textarea
                  name="message"
                  rows={3}
                  maxLength={1000}
                  onChange={handleMessageChange}
                />
              </label>

              {/* Honeypot field for simple bots.
                  It is hidden from normal users.
                  If a bot fills it, the form is not submitted. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className={css.honeypot}
                aria-hidden="true"
              />

              <input
                type="hidden"
                name="_subject"
                value="Új üzenet az Az én gyöngyöm oldalról"
              />

              {error && (
                <p
                  className={css.errorMessage}
                  role="alert"
                >
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
