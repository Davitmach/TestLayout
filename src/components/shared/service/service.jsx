import { useRef ,useState,useEffect} from "react";
import "./service.scss";
import useStore from "../../../store";
import { useInView } from 'react-intersection-observer';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'; 

export default function Service() {
  
  const { ref, inView } = useInView({
    threshold: 0.9,  // Устанавливаем порог для видимости
  });

  const { activeSection, setActiveSection } = useStore();

  useEffect(() => {
    
    if (inView) {
      console.log('qaq');
      
      setActiveSection(2);  
    }
  }, [inView, setActiveSection]);  
  const [move, setMove] = useState(0);
  let animationFrameId = useRef(null);

  
  const HandleMove = (event) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current); 
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const wrapper = document.getElementById('Wrapper');
      if (!wrapper) return;

     
      const mouseX = event.clientX;

      
      const wrapperWidth = wrapper.offsetWidth;

      
      const wrapperLeft = wrapper.getBoundingClientRect().left;

      
      const offsetX = mouseX - wrapperLeft - wrapperWidth / 2;

     
      const maxMove = 271;
      const minMove = -271;

      const newMove = Math.max(Math.min(offsetX, maxMove), minMove); 

     
      setMove(newMove);
    });
  };

  const style = {
    transform: `translateX(${move}px)`,
    transition: "transform 0.1s ease-out", 
  };

  return (
    <>
      <div id="Service" className="Service_box" ref={ref}>
        <div className="Info_box">
          <h1>Наши услуги за ваши деньги</h1>
          <span>деньги, кстати, небольшие</span>
        </div>
        <div className="Swipper">
          <div onMouseMove={HandleMove}
            id="Wrapper" className="Wrapper" style={style}>
            <div>
              <div className="Title_box">
                <h1>Создание сайтов</h1>
              </div>
              <div>
                <p>
                  Мы сайты любой сложности от лендингов до многостраничных
                  корпоративных порталов. Обеспечиваем современный, адаптивный
                  дизайн, высокую скорость загрузки и удобную навигацию.
                  Включаем интеграции с платежными системами, CRM и другими
                  сервисами для улучшения работы бизнеса.
                </p>
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Разработка ботов</h1>
              </div>
              <div>
                <p>
                  Мы создаем чат-ботов для автоматизации общения с клиентами
                  Боты могут обрабатывать запросы, помогать с бронированием,
                  собирать информацию и интегрироваться с CRM-системами, улучшая
                  эффективность бизнеса и снижая нагрузку на сотрудников. 
                </p>
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Веб-дизайн</h1>
              </div>
              <div>
                <p>
                  Мы разрабатываем уникальные, привлекательные и функциональные
                  дизайны для сайтов и приложений. Создаем стильные макеты,
                  ориентированные на удобство пользователя, учитывая все
                  требования бренда и современные тренды в дизайне. 
                </p>
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Mobile App</h1>
              </div>
              <div>
                <p>
                   Мы разрабатываем нативные и кроссплатформенные мобильные
                  приложения для iOS и Android.  Наши решения обеспечивают
                  высокую производительность,  удобство в использовании и
                  стабильную работу на различных устройствах.
                </p>
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Интеграция ИИ</h1>
              </div>
              <div>
                <p>
                  Мы помогаем компаниям внедрять решения на базе искусственного
                  интеллекта, которые автоматизируют процессы, повышают
                  эффективность и предоставляют новые возможности для анализа
                  данных. Интеграция ИИ может включать в себя внедрение
                  машинного обучения, обработки естественного языка (NLP),
                  прогнозной аналитики, распознавания изображений и многого
                  другого, в зависимости от потребностей бизнеса.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
