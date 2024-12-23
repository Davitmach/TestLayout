import { useRef ,useState} from "react";
import "./service.scss";

export default function Service() {
  const ref = useRef();
  const [move, setMove] = useState(0); // Храним текущее смещение
  let animationFrameId = useRef(null);

  // Функция для обработки движения
  const HandleMove = (event) => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current); // Останавливаем предыдущее обновление
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const wrapper = ref.current;
      if (!wrapper) return;

      // Получаем позицию мыши относительно окна
      const mouseX = event.clientX;

      // Получаем размер элемента Wrapper
      const wrapperWidth = wrapper.offsetWidth;

      // Получаем позицию левого края элемента относительно окна
      const wrapperLeft = wrapper.getBoundingClientRect().left;

      // Рассчитываем смещение от центра Wrapper
      const offsetX = mouseX - wrapperLeft - wrapperWidth / 2;

      // Ограничиваем смещение в пределах -271px и 271px
      const maxMove = 271;
      const minMove = -271;

      const newMove = Math.max(Math.min(offsetX, maxMove), minMove); // Ограничиваем диапазон

      // Обновляем смещение
      setMove(newMove);
    });
  };

  // Применяем трансформацию с плавностью через CSS
  const style = {
    transform: `translateX(${move}px)`,
    transition: "transform 0.1s ease-out", // Плавное движение
  };

  return (
    <>
      <div className="Service_box">
        <div className="Info_box">
          <h1>Наши услуги за ваши деньги</h1>
          <span>деньги, кстати, небольшие</span>
        </div>
        <div className="Swipper">
          <div onMouseMove={HandleMove}
            onTouchMove={HandleMove} 
            onTouchStart={HandleMove}  ref={ref} className="Wrapper" style={style}>
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
                   Мы разрабатываем нативные и кроссплатформенные  мобильные
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
