import style from './ourService.module.scss'

const OurService = ({services}) => {
	const { title, text } = services
	return ( 
		<div className={style.ourService}>
      <div className={style.title}>
        {title}
      </div>
      <p fontSize={16} width={457}>
        {text}
      </p>
    </div>
	 );
}
 
export default OurService;