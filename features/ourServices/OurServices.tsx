import OurService from '@/widgets/OurService/OurService';
import style from './ourServices.module.scss'

import bg from '@/images/ourServices/bg.png'
import Image from 'next/image';
import { Title } from '@/shared/ui/UI';

const services = [
  {
    title: "Представление интересов в суде",
    text: "адвокаты помогают своим клиентам вести дела в различных судах, включая гражданские, уголовные, административные и другие виды дел",

  },
  {
    title: "Защита прав клиента",
    text: "адвокаты защищают права и интересы своих клиентов в различных ситуациях, будь то споры с работодателями, страховыми компаниями, конкурентами и т.д.",

  },
  {
    title: "Юридическое консультирование",
    text: "адвокаты консультируют клиентов по правовым вопросам, разъясняют законы, помогают понять права и обязанности.",

  },
  {
    title: "Урегулирование споров",
    text: "адвокаты помогают разрешать разногласия между сторонами в различных сферах, часто используя методы внесудебного урегулирования споров.",

  },
  {
    title: "Составление договоров",
    text: "адвокаты помогают своим клиентам вести дела в различных судах, включая гражданские, уголовные, административные и другие виды дел",

  },
  {
    title: "Представление в переговорах",
    text: "адвокаты могут представлять интересы клиента в переговорах с другими сторонами, ведя защиту прав и интересов клиента",

  },
];

const OurServices = () => {
	return ( 
		<section className={style.ourServices}>
      <div className={style.ourServices__container}>
        <div className={style.ourServices__row}>
          <div className={style.text}>
            <Title>Наши услуги</Title>
          </div>
          <div className={style.content}>
            <ul>
              {services.map((item, i) => <li key={i}><OurService services={...item}/></li> )}
            </ul>
						<div className={style.bg}><Image src={bg} alt="bg"/></div>
          </div>
					
        </div>
      </div>
    </section>
	 );
}
 
export default OurServices;