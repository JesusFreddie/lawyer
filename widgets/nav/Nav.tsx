'use client'
import Link from "next/link";
import style from "./nav.module.scss";
import { usePathname } from "next/navigation";

const links = [
  { name: "Главная", link: "/" },
  { name: "О Нас", link: "/about" },
  { name: "Услуги", link: "/services" },
  { name: "Контакты", link: "/contacts" },
  { name: "Отзывы", link: "/reviews" },
  { name: "Ресурсы", link: "/resources" },
];

const Nav = () => {

	const pathname = usePathname();

  return (
    <nav className={style.nav}>
      <ul>
        {links.map(({ name, link }, i) => (
          <li className={pathname === link ? style.active : null} key={i}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
