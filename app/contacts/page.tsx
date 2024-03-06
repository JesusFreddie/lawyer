import { Title } from "@/shared/ui/UI";
import style from "./contact.module.scss";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className="container">
        <div className={style.contacts__row}>
          <Title>Контакты</Title>
          <div className={style.content}>
            <p>Контактная инфомрация: svedinkvidon@gmail.com </p>
						<p>tel: 880099923</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
