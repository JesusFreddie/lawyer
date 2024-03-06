import { Title } from "@/shared/ui/UI";
import style from "./reviews.module.scss";

const Reviews = () => {
  return (
    <section className={style.reviews}>
      <div className="container">
        <div className={style.reviews__row}>
          <Title>Отзывы</Title>
          <div className={style.reviews__content}>
            <div className={style.card}>
              <h3 className={style.card__title}>Джонни Депп</h3>
              <p className={style.card__des}>Смешно с Эмбер получилось</p>
            </div>
            <div className={style.card}>
              <h3 className={style.card__title}>Джонни Депп</h3>
              <p className={style.card__des}>Смешно с Эмбер получилось</p>
            </div>
            <div className={style.card}>
              <h3 className={style.card__title}>Джонни Депп</h3>
              <p className={style.card__des}>Смешно с Эмбер получилось</p>
            </div>
            <div className={style.card}>
              <h3 className={style.card__title}>Джонни Депп</h3>
              <p className={style.card__des}>Смешно с Эмбер получилось</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
