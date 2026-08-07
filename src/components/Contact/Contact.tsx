import { useState } from "react";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import css from "./Contact.module.css";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={css.contact} id="contact">
      <Container>
        <div className={css.content}>
          <h2>Szeretnél egy egyedi ékszert?</h2>
          <p>
            Szívesen elkészítem neked azt a különleges darabot,
            amely igazán hozzád illik.
          </p>
          <Button type="button" onClick={() => setIsModalOpen(true)}>
            Írj nekem
          </Button>
        </div>
      </Container>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}