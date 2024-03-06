import style from './chats.module.scss'

const Chats = () => {
	return ( 
		<div className={style.chats}>
			<button className={style.chat}>
				<div className={style.avatar}></div>
				<div className={style.user}>
					<p className={style.fullName}>Геннадий Горин</p>
					<p>Текст сообщения</p>
				</div>
			</button>
		</div>
	 );
}
 
export default Chats;