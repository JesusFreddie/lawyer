import { createEvent, createStore } from "effector";

export const $usersStor = createStore([
  {
    email: "svedinkvidon@gmail.com",
    fullName: "Сазонов Константин Евгеньевич",
		password: '111',
		tel: '89000246721',
		rights: 'Адвокат'
  },
  {
    email: "lol@gmail.com",
    fullName: "Ивано Иван Иванович",
		password: '123',
		tel: '89000246721',
		rights: 'Пользователь'
  },
  {
    email: "lostPingvino@gmail.com",
    fullName: "Крипто Эстипович Каго",
		password: '5555555',
		tel: '88005553535',
		rights: 'Пользователь'
  },
  {
    email: "lol@gmail.com",
    fullName: "Ивано Иван Иванович",
		password: '123',
		tel: '89000246721',
		rights: 'Пользователь'
  },
  {
    email: "root@root.root",
    fullName: "Root",
		password: 'root',
		tel: '--',
		rights: 'Администратор'
  },
]);

export const addUser = createEvent();

$usersStor.on(addUser, (stor, res) => [...stor, res]);