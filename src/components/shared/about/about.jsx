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
      console.log('about');
      
      setActiveSection(1);  
    }
  }, [inView]);  

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
      <div>бэкенд</div>
      <div>mob app</div>
      <div>AI интеграции</div>
      <div>разработка</div>
      <div>дизайн</div>
      <div>чат-бот</div>
      <div>перфоманс</div>
      <div>фронтенд</div>
      <div>аналитика</div>
      <div>менеджмент</div>
    </div>
  </div>

  );
}
