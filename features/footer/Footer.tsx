import Nav from '@/widgets/nav/Nav';
import style from './footer.module.scss'
import Logo from '@/shared/logo/Logo';

const Footer = () => {
	return ( 
		<footer className={style.footer}>
			<div className="container">
				<div className={style.footer__row}>
					<div className={style.company}>
						<Logo/>
						<p>Самая популярная адвокатская компания в стране</p>
					</div>
					<Nav/>
					<div className={style.info}>
						<h3>Контактная инфомрация:</h3>
						<p>svedinkvidon@gmail.com</p>
						<p>https://advokat.ru</p>
					</div>
				</div>
			</div>
		</footer>
	 );
}
 
export default Footer;