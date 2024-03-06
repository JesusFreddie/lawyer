import { Button, Input, Title } from "@/shared/ui/UI";
import style from "./consultation.module.scss";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import img from "@/images/consultation/consultation.jpg";
import { useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Consultation = () => {
  const [telRegist, setTelRegist] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <section className={style.consultation}>
      <div className="container">
        <div className={style.consultation__row}>
          <div className={style.img}>
            <Image src={img} alt="img" />
          </div>
          <div className={style.content}>
            <Title>Получить консультацию</Title>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
              <div className={style.tell}>
                <input
                  className={
                    style.input + " " + (!telRegist ? style.err : null)
                  }
                  type="tel"
                  placeholder="Введите телефон"
                  {...register("tell", { required: true })}
                />
                <Button>Отправить</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
