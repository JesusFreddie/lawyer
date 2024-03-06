import { Title } from '@/shared/ui/UI';
import style from './resources.module.scss'

const Resources = () => {
	return ( 
		<section className={style.resources}>
			<div className="container">
				<div className={style.resources__row}>
					<Title>Ресурсы</Title>
					<p><a href="http://www.constitution.ru/10003000/10003000-3.htm">Конституция РФ</a></p>
					<p><a href="https://www.churchofjesuschrist.org/study/manual/new-testament-study-guide-for-home-study-seminary-students/welcome-to-the-new-testament?lang=rus">Новый завет</a></p>
				</div>
			</div>
		</section>
	 );
}
 
export default Resources;