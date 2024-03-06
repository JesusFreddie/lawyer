import { Button, Title } from "@/shared/ui/UI";
import style from "./about.module.scss";
import Image from "next/image";

import img from '@/images/about/about.jpg'

const About = () => {
  return (
    <section className={style.about}>
      <div className="container">
        <div className={style.about__row}>
          <div className={style.text}>
            <Title mb={50}>О НАС</Title>
            <p>
              Мы являемся командой опытных и преуспевающих юристов, готовых
              предоставить качественные и профессиональные юридические услуги
              нашим клиентам. Наша цель - защитить права и интересы каждого
              клиента, предоставив им надежную правовую поддержку в
              разнообразных ситуациях.
            </p>
            <p>
              Мы гордимся нашими успешными делами, которые помогли нашим
              клиентам добиться желаемых результатов и защитить свои интересы.
              Мы стремимся к профессиональному росту и постоянно совершенствуем
              свои навыки.
            </p>
						<Button>Консультация</Button>
          </div>
          <div className={style.img}>
						<Image src={img}/>
					</div>
        </div>
      </div>
    </section>
  );
};

export default About;
