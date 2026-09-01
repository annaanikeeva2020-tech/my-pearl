import { useState } from "react";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import css from "./Contact.module.css";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={css.contact} id="contact">
        <div className={css.background}>
        <div className={css.content}>
          <h2>Szeretnél egy egyedi ékszert?</h2>
          <p>
            Szívesen készítek neked egy kézzel készített ásvány karkötőt vagy más különleges ékszert, amely igazán hozzád illik.
          </p>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            Írj nekem
          </Button>
          </div>
        </div>
      
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}