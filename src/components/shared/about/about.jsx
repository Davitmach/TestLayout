import './about.scss';
import useStore from '../../../store';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function About() {

  const { ref, inView } = useInView({
    threshold: 0.9,  // Устанавливаем порог для видимости
  });

  const { activeSection, setActiveSection } = useStore();

  useEffect(() => {
    
    if (inView) {
      
      
      setActiveSection(1);  
    }
  }, [inView]);  
const HandleAddClass=(e)=> {


}
  return (
    <div id='About' className='About_box' ref={ref}>
    <div className='Info_box'>
      <div className='Title_box'>
        <h1>О нашей команде</h1>
        <h2>и это правда</h2>
      </div>
      <div className='Description_box'>
        <p>
          Айти Перфоманс — молодая и амбициозная команда, которая занимается созданием решений в сфере веб-разработки, дизайна и разработки мобильных приложений.
          Наша цель — помочь бизнесам и стартапам реализовать их идеи и сделать их онлайн-присутствие более эффективным и привлекательным. Мы понимаем, что каждый проект уникален, поэтому для каждого клиента мы создаем индивидуальные решения, которые соответствуют его целям и задачам.
        </p>
      </div>
    </div>
    <div className="Btn_container">
      <div onClick={HandleAddClass}>бэкенд</div>
      <div onClick={HandleAddClass}>mob app</div>
      <div onClick={HandleAddClass}>AI интеграции</div>
      <div onClick={HandleAddClass}>разработка</div>
      <div onClick={HandleAddClass}>дизайн</div>
      <div onClick={HandleAddClass}>чат-бот</div>
      <div onClick={HandleAddClass}>перфоманс</div>
      <div onClick={HandleAddClass}>фронтенд</div>
      <div onClick={HandleAddClass}>аналитика</div>
      <div onClick={HandleAddClass}>менеджмент</div>
    </div>
  </div>

  );
}
