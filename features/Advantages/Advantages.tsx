import { Title } from '@/shared/ui/UI';
import style from './Advantages.module.scss'
import Image from 'next/image';

import img from '@/images/advantages/advantages.jpg'
import checkMark from '@/images/advantages/check-mark.svg'

const advantages = [
	'Экспертиза и профессионализм',
	'Индивидуальный подход к клиентам',
	'Репутация и доверие',
]

const Advantages = () => {
	return ( 
		<section className={style.advantages}>
			<div className="container">
				<div className={style.advantages__row}>
					<div className={style.content}>
						<Title>Преимущества</Title>
						<ul>
							{advantages.map((item, i) => <li key={i}><Image src={checkMark} alt='checkmark'/>{item}</li> )}
						</ul>
					</div>
					<div className={style.img}>
						<Image src={img} alt='img'/>
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default Advantages;