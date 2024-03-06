import { useUnit } from "effector-react";
import style from "./users.module.scss";
import { $usersStor } from "@/stors/usersStor";

const Users = () => {
  const users = useUnit($usersStor);
  return (
    <div className={style.users}>
      <table>
        <thead>
          <tr>
            <th>ФИО:</th>
            <th>Почта:</th>
            <th>Телефон:</th>
            <th>Права:</th>
            <th>Пароль:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) =>
            user.rights == "Пользователь" ? (
              <tr key={i}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td>{user.rights}</td>
                <td>{user.password}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
