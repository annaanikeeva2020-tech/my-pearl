import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import css from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={css.contact} id="contact">
      <Container>
        <div className={css.content}>
          <h2>Szeretnél egy egyedi ékszert?</h2>

          <p>
            Szívesen elkészítem neked azt a különleges darabot,
            amely igazán hozzád illik.
          </p>

          <Button type="button">
            Írj nekem
          </Button>
        </div>
      </Container>
    </section>
  );
}