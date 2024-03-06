import { Title } from '@/shared/ui/UI';
import style from './page.module.scss'

const NotFound = () => {
	return ( 
		<div className={style.notFound}>
			<div className="container">
				<div className={style.notFound__row}>
					<Title mb={20}>404</Title>
					<p>Страница не найдена</p>
				</div>
			</div>
		</div>
	 );
}
 
export default NotFound;