'use client'
import Logo from "@/shared/logo/Logo";
import style from "./header.module.scss";
import Nav from "@/widgets/nav/Nav";
import { Button } from "@/shared/ui/UI";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $activeUser } from "@/stors/activeUserStore";

import avatar from '@/images/icon/user.png'
import Image from "next/image";

const Header = () => {
  const activeUser = useUnit($activeUser);

	const fullNameForward = (fullName: string) : string => {
		const userName = fullName.split(' ')
		if (userName.length < 3) return fullName
		return `${userName[0]} ${userName[1][0]}.${userName[2][0]}.`;
	}

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__row}>
          <Logo />
          <Nav />
          {activeUser.length != 0 ? (
            <Link href='/user'><span className={style.user}><Image src={avatar} alt="userAvatar"/>{fullNameForward(activeUser.fullName)}</span></Link>
          ) : (
            <Link href="/login">
              <Button type="header">Вход</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
