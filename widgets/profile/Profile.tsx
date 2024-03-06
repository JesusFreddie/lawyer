import { useUnit } from "effector-react";
import style from "./profile.module.scss";
import { $activeUser } from "@/stors/activeUserStore";

const Profile = () => {

	const userData = useUnit($activeUser)

  return (
    <div className={style.profile}>
      <div className={style.user}>
        <div className={style.avatar}></div>
        <div className={style.info}>
          <div className={style.text}>
            <p className={style.fullName}>{userData.fullName}</p>
            <p className={style.email}>{userData.email}</p>
            <p className={style.tell}>Телефон: {userData.tel}</p>
          </div>
					<button className={style.editProfil}>Изминить</button>
        </div>
      </div>
			<div className={style.affairs}>
				У вас нет активных дел
			</div>
    </div>
  );
};

export default Profile;
