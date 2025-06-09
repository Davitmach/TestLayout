import { useRef ,useState,useEffect} from "react";
import "./service.scss";
const WebDev = ()=> {
  return(
<>
<div><h2>Не просто страницы, а системы, которые продают</h2></div>
    <div><p>Когда клиент заходит на сайт, у вас есть несколько секунд, чтобы убедить его остаться. Если интерфейс сложный, страницы загружаются медленно или информация представлена хаотично — пользователь уйдет. Мы делаем так, чтобы он остался, нашел то, что ищет, и совершил нужное действие.</p></div>
    <div className="Predlagat">
      <div><h1>Перед разработкой сайта мы задаем себе три вопроса:</h1></div>
      <div>
        <div>Кто ваша аудитория?</div>
        <div>Какой путь она проходит на сайте?</div>
        <div>Какие эмоции должен вызывать дизайн?</div>

      </div>
    </div>
    <div className="Process">
      <div><h1>Процесс создания:</h1></div>
      <div>
        <div>
          <div>
            <div><span>01</span></div>
            <div>Строим логику сайта</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>02</span></div>
            <div>Проектируем интерфейс</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>03</span></div>
            <div>Создаем чистый и понятный дизайн</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>04</span></div>
            <div>Разрабатываем сайт</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>05</span></div>
            <div>Тестируем продукт и доводим до идеала</div>
          </div>
        </div>
      </div>
    </div>
    <div><h3>Наши сайты не просто выглядят красиво — они работают и приводят клиентов.</h3></div>
    <div className="Btn"><a href="#Mail">{'<Заказать/>'}</a></div>
</>
  )
}
const Dev = ()=> {
  return(
    <>
    <div><p>Мы разрабатываем веб-сервисы, backend-решения и цифровые продукты с нуля. Применяем оптимизированные архитектурные паттерны, следим за производительностью, безопасностью и удобством.</p></div>
    <div className="Princip">
      <div><h1>В разработке мы придерживаемся принципов:</h1></div>
      <div>
        <div>
          <div>
            <div><span>Масштабируемость </span></div>
            <div>Продукт легко адаптируется к росту нагрузки</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>Безопасность</span></div>
            <div>Работаем с лучшими практиками защиты данных.</div>
          </div>
        </div>
        <div>
          <div>
            <div><span>Интеграция</span></div>
            <div>Готовим API, настраиваем связь с внешними сервисами.</div>
          </div>
        </div>
  
      </div>
    </div>
    <div className="Btn"><a href="#Mail">{'<Заказать/>'}</a></div>
    </>
  )
}

const Dizayn = ()=> {
  return(
    <>
    <div><h3 className="dizayn">Почему первое впечатление решает все</h3 ></div>
    <div className="Steps">
      <div>
        <div><span>01</span></div>
        <div>
          <div><h1 className="dizayn_h1">Мы не используем шаблоны и не гонимся за трендами ради трендов</h1></div>
          <div><p>Дизайн должен решать конкретную задачу: повышать конверсию, вызывать доверие, помогать пользователям быстро находить нужную информацию.</p></div>
        </div>
      </div>
      <div>
        <div><span>02</span></div>
        <div>
          <div><h1 className="dizayn_h1">Человек делает выводы о вашем бизнесе за считанные секунды</h1></div>
          <div><p>Если сайт или приложение выглядит устаревшим, неудобным или перегруженным, пользователь закроет его, так и не разобравшись, что вы предлагаете</p></div>
        </div>
      </div>
      <div>
        <div><span>03</span></div>
        <div>
          <div><h1 className="dizayn_h1">Хороший дизайн — это не только про красоту, но и про удобство</h1></div>
          <div><p>Мы разрабатываем интерфейсы, которые интуитивно понятны, минималистичны и функциональны.</p></div>
        </div>
      </div>
      <div>
        <div><span>04</span></div>
        <div>
          <div><h1 className="dizayn_h1">Каждая кнопка, каждая анимация, каждая тень — всё имеет значение</h1></div>
        
        </div>
      </div>
    </div>
    <div className="Btn"><a href="#Mail">{'<Заказать/>'}</a></div>
    </>
  )
}
const Mob = ()=> {
  return(
  <>
 <div><p>Мы разрабатываем приложения для iOS и Android, которые работают быстро, стабильно и интуитивно понятно. Но перед тем как писать код, мы продумываем концепцию, при необходимости, проводим интервью с потенциальными пользователями, изучаем, что нравится клиентам.</p></div>
  <div className="Vajno">
    <div><h1>Для нас важно:</h1></div>
    <div>
      <div>
        <div><span>01</span></div>
        <div>Приложение не просто было, а решало проблему</div>
      </div>
      <div>
        <div><span>02</span></div>
        <div>Оно должно быть легким, быстрым и удобным</div>
      </div>
      <div>
        <div><span>03</span></div>
        <div>Без лишних функций, которые никто не использует и за которые надо платить</div>
      </div>
    </div>
  </div>
  <div className="Btn"><a href="#Mail">{'<Заказать/>'}</a></div>
  </>
  )
}
const Managment = ()=> {
  return(
    <>
    <div><h3 className="dizayn">Менеджмент продуктов и проектов: когда важен не только результат, но и процесс</h3></div>
    <div className="Managment">
      <div>
        <div><span>01</span></div>
        <div><p>Любая разработка без грамотного управления может превратиться в хаос. Сроки растягиваются, задачи теряются, а финальный продукт получается не таким, как задумывалось.</p></div>
      </div>
      <div>
        <div><span>02</span></div>
        <div><p>Мы выстраиваем чёткий процесс работы: от идеи до релиза. Разрабатываем стратегию, планируем каждый этап, контролируем сроки и бюджет.</p></div>
      </div>
      <div>
        <div><span>03</span></div>
        <div><p>Но главное — мы остаёмся рядом и после запуска. Анализируем, как пользователи взаимодействуют с продуктом, находим слабые места, оптимизируем. Потому что цифровой продукт должен развиваться вместе с вашим бизнесом.</p></div>
      </div>
    </div>
    <div className="Btn"><a href="#Mail">{'<Заказать/>'}</a></div>
    </>
  )
}

export default function Service() {
  const [active,setActive] = useState('сайт');

  const HandleChange = (state)=> {
    setActive(state)
  }
 
  


  return (
    <>
      <div id="Service" className="Service_box" >
     <div>
<div className="Info_box">
  <div><h1>Наши услуги за ваши деньги</h1></div>
  <div><h2>И деньги, кстати, небольшие</h2></div>
</div>
<div className="Info">
<div className="Title">IT Perfomance</div>
  <div className="paragraphs"  style={{width:'100%'}}>
    
    <div  style={{width:'100%'}}><p className="FirstParagraph" style={{width:'100%',overflow:'hidden',textAlign:'ellipsis'}}>Это профессиональная студия, специализирующаяся на быстром создании современных, функциональных и эффективных решений. Мы не работаем шаблонно. Каждое решение разрабатывается с нуля, под конкретные задачи. Мы погружаемся в бизнес, понимаем <br/>его аудиторию и только после этого создаём продукт.</p></div>

  <div><p>Мы ценим не просто красивые интерфейсы, а инструменты, которые работают. И если вам нужен надёжный партнёр для разработки, мы готовы обсудить, как сделать ваш бизнес сильнее в цифровом мире.</p></div>
  </div>
</div>
<div className="About">
<div className="Types">
            <div onClick={()=>HandleChange('сайт')} className={active == 'сайт' && 'Active'}>Создание сайтов</div>
            <div onClick={()=>HandleChange('раз')} className={active == 'раз' && 'Active'}>Разработка</div>
            <div onClick={()=>HandleChange('веб')} className={active == 'веб' && 'Active'}>Дизайн</div>
            <div onClick={()=>HandleChange('ии')} className={active == 'ии' && 'Active'}>Менеджмент</div>
            <div onClick={()=>HandleChange('моб')} className={active == 'моб' && 'Active'}>Мобильные приложения</div>
          </div>
  <div className="Right_box">
    {active == 'сайт' ? <WebDev/> : active == 'раз'? <Dev/> :active == 'моб'? <Mob/> :active == 'веб'? <Dizayn/> : <Managment/>}

  </div>
</div>
     </div> 
      </div>
    </>
  );

}
