import { Button, Title } from '@/shared/ui/UI';
import style from './services.module.scss'

const services = [
	{title: 'Гражданское право', des: 'Составление и анализ гражданско-правовых договоров. Защита прав собственности'},
	{title: 'Уголовное право', des: 'Разводы и раздел имущества. Усыновление и опека'},
	{title: 'Семейное право', des: 'Представление интересов работодателей и работников. Разрешение трудовых споров'},
	{title: 'Трудовое право', des: 'Представление интересов в уголовных делах. Защита подсудимых'},
	{title: 'Недвижимость', des: 'Помощь в сделках с недвижимостью. Споры о правах на недвижимость'},
	{title: 'Корпоративное право', des: 'Регистрация и ликвидация юридических лиц. Осуществление корпоративных сделок'},
]

const Services = () => {
	return ( 
		<section className={style.services}>
			<div className="container">
				<div className={style.services__row}>
					<Title mb={70}>Услуги</Title>
					<div className={style.content}>
						{services.map(({title, des}, i) => {
							return <div key={i} className={style.card}>
								<h3 className={style.card__title}>{title}</h3>
								<p className={style.card__des}>{des}</p>
								<Button>Консультация</Button>
							</div>
						})}
					</div>
				</div>
			</div>
		</section>
	 );
}
 
export default Services;