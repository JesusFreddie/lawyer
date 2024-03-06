import Image from 'next/image';
import style from './hero.module.scss'
import { Button } from '@/shared/ui/UI';

import img from '@/images/hero/hero.png'

const Hero = () => {
	return ( 
		<div className={style.hero}>
			<div className="container">
				<div className={style.hero__row}>
					<div className={style.content}>
						<h2 className={style.title}>АДВОКАТСКИЕ УСЛУГИ</h2>
						<p className={style.text}>Самая популярная адвокатская компания в стране</p>
						<Button>Консультация</Button>
					</div>
					<div className={style.img}><Image src={img}/></div>
				</div>
			</div>
		</div>
	 );
}
 
export default Hero;