"use client";
import { Button, Title } from "@/shared/ui/UI";
import style from "./login.module.scss";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUnit } from "effector-react";
import { $usersStor } from "@/stors/usersStor";
import { exitUser, loginUser } from "@/stors/activeUserStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const loginUserPage = (data : any, AllUser: any) => {
	return AllUser.filter((user: any) => (
		user.email == data.email &&
		user.password == data.password
	))
}

const Login = () => {

	useEffect(() => {
		exitUser()
	}, [])

	const [validLogin, setValidLogin] = useState(false)

	const routing = useRouter()

	const AllUser = useUnit($usersStor)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
	
  const onSubmit: SubmitHandler<Inputs> = (data) => {
		const userData = loginUserPage(data, AllUser)
		if (userData.length == 0) {
			return setValidLogin(true)
		}
		setValidLogin(false)
		loginUser(userData[0])
		routing.push('/user')
	};

  return (
    <section className={style.login}>
      <div className="container">
        <div className={style.login__row}>
          <Title mb={50}>Войти</Title>
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              placeholder="Почта"
              {...register("email", { required: true })}
              className={errors.email ? style.error : null}
            />
            <input
              type="password"
              placeholder="Пароль"
              {...register("password", { required: true })}
              className={errors.password ? style.error : null}
            />
            <p>
              Забыл пароль?{" "}
              <span className={style.link}>
                <Link href="/recovery">Восстановить</Link>
              </span>
            </p>
						
            <Button>Войти</Button>
						{validLogin ? <span className={style.validLogin}>Не верный логин или пароль</span> : null}
            <p>
              Нет аккаунта?{" "}
              <span className={style.link}>
                <Link href="/register">Регистрация</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
