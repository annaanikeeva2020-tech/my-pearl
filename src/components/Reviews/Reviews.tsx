import Container from "../UI/Container/Container";
import { reviews } from "../../data/reviews";
import css from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section className={css.reviews} id="reviews">
      <Container>
            <div className={css.heading}>
              <h2>Amit vásárlóim mondanak</h2>

              <p>Örömmel olvasom minden kedves visszajelzést.</p>
            </div> 
        <div className={css.list}>
          {reviews.map((review) => (
            <article className={css.card} key={review.id}>
              <p className={css.text}>
                "{review.text}"
              </p>

              <p className={css.name}>
                — {review.name}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}