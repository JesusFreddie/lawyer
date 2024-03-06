"use client";
import { Button, Title } from "@/shared/ui/UI";
import style from "./register.module.scss";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useUnit } from "effector-react";
import { $usersStor, addUser } from "@/stors/usersStor";
import { $activeUser, loginUser } from "@/stors/activeUserStore";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Register = () => {
	const router = useRouter()

	const usersStore = useUnit($usersStor)
	const loginUserStore = useUnit($activeUser)
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
		router.push('/user');
		addUser(data);
		loginUser(data);
	}

  return (
    <section className={style.register}>
      <div className="container">
        <div className={style.register__row}>
          <Title mb={50}>Регистрация</Title>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Почта"
              {...register("email", { required: true })}
              className={errors.email ? style.error : null}
            />
            <input
              type="tel"
              placeholder="Телефон"
              {...register("tel", { required: true, pattern: /^[0-9]{11}$/ })}
              className={errors.tel ? style.error : null}
            />
            <input
              type="text"
              placeholder="ФИО"
              {...register("fullName", { required: true })}
              className={errors.fullName ? style.error : null}
            />
            <input
              type="password"
              placeholder="Пароль"
              {...register("password", { required: true })}
              className={errors.password ? style.error : null}
            />
            <input
              type="password"
              placeholder="Повторите пароль"
              {...register("replayPassword", {
                required: true,
                validate: (values) => {
                  const { password } = getValues();
                  return password === values;
                },
              })}
              className={(errors.replayPassword ? style.error : null) + " "}
            />
            <label className={style.checked}>
              <input
                type="checkbox"
                {...register("checked", { required: true })}
              />{" "}
              <span className={errors.checked ? style.error : null}>
                Я согласен на обработку личных данных
              </span>
            </label>
            <Button>Регистрация</Button>
            <p>
              Уже есть аккаунт?{" "}
              <span className={style.link}>
                <Link href="/login">Войти</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
