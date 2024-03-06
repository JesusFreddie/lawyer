import style from "./notification.module.scss";

const Notification = () => {
  return (
    <div className={style.notifications}>
      <button className={style.notification}>
        <p className={style.name}>Тип уведомления</p>
        <p>Текст уведомления</p>
      </button>
    </div>
  );
};

export default Notification;
