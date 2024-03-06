import Image from 'next/image';
import style from './logo.module.scss'
import Link from 'next/link';

import logo from './logo.png'

const Logo = () => {
	return ( 
		<div className={style.logo}>
			<Image src={logo} alt='Адвокат.ru'/>
			<Link href='/'><h1>Адвокат.ру</h1></Link>
		</div>
	 );
}
 
export default Logo;