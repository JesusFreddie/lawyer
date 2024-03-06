"use client";
import { $usersStor } from "@/stors/usersStor";
import { useUnit } from "effector-react";

import style from "./user.module.scss";
import { useState } from "react";
import Profile from "@/widgets/profile/Profile";
import Chats from "@/widgets/chats/chats";
import Notification from "@/widgets/notification/notification";
import { $activeUser } from "@/stors/activeUserStore";
import Link from "next/link";
import Users from "@/widgets/users/Users";
import Lawyer from "@/widgets/lawyer/Lawyer";

const userNav = ["Уведомления", "Профиль", "Чаты"];
const adminNav = ["Уведомления", "Профиль", "Чаты", "Пользователи", "Адвокаты"];

const s = [];

const User = () => {
  const [pageActive, setPageActive] = useState("Профиль");

  const user = useUnit($activeUser);

  return (
    <>
      {user.length != 0 ? (
        <div className={style.user}>
          <div className="container">
            <div className={style.user__row}>
              <ul className={style.nav}>
                {user.rights == "Администратор"
                  ? adminNav.map((item, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setPageActive(item)}
                          className={item == pageActive ? style.active : null}
                        >
                          {item}
                        </button>
                      </li>
                    ))
                  : userNav.map((item, i) => (
                      <li key={i}>
                        <button
                          onClick={() => setPageActive(item)}
                          className={item == pageActive ? style.active : null}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
              </ul>
              <div className={style.content}>
                {pageActive == "Профиль" ? <Profile /> : null}
                {pageActive == "Чаты" ? <Chats /> : null}
                {pageActive == "Уведомления" ? <Notification /> : null}
                {pageActive == "Пользователи" ? <Users /> : null}
                {pageActive == "Адвокаты" ? <Lawyer /> : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.errorLogin}>
          Вы не вошли в аккаунт.{" "}
          <Link href="/login" className={style.link}>
            Войти
          </Link>{" "}
        </div>
      )}
    </>
  );
};

export default User;
