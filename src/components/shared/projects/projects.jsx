import { useRef ,useState,useEffect} from "react";
import "./projects.scss";

export default function Projects() {
  const [active,setActive] = useState('сайт');
  const [more,setMore] = useState(false);
const HandleChange = (state)=> {
  setActive(state)
}

  return (
    <>
   
      <div id="Service" className="Projects_box" >
      <div>
        <div className="Top_block">
          <div className="Left_block">
        <div className="Info_box">
          <div></div>
          <div></div>
          <h1>Наши работы</h1>
          <span>Здесь можете оказаться вы</span>
        </div>
 
          <div className="Types">
            <div onClick={()=>HandleChange('сайт')} className={active == 'сайт' && 'Active'}>Создание сайтов</div>
            <div onClick={()=>HandleChange('раз')} className={active == 'раз' && 'Active'}>Разработка ботов</div>
            <div onClick={()=>HandleChange('веб')} className={active == 'веб' && 'Active'}>Веб-дизайн</div>
            <div onClick={()=>HandleChange('ии')} className={active == 'ии' && 'Active'}>Интеграция ИИ</div>
            <div onClick={()=>HandleChange('моб')} className={active == 'моб' && 'Active'}>Мобильные приложения</div>
          </div>
        </div>
        <div className="Right_block">
          <div>
            <div><h1>Более 55</h1></div>
            <div><span>Проектов в разных нишах</span></div>
          </div>
          <div>
            <div>Ритейл</div>
            <div>HR</div>
            <div>DIY</div>
            <div>Автотовары</div>
            <div>Сервисы</div>
            <div>Металлургия</div>
          </div>
        </div>
        </div>
        <div className="Jobs">
          <div className="Jobs_box">{Array.from({length:more == false?6 :12 },(e,_)=> {
            return(
              <div>
                <div className="Img_box"></div>
                <div className="Info_box">
                <div className="Title_box">Название сайта</div>
                <div className="Date_box">Январь 2025</div>
                </div>
              
              </div>
            )
          })}</div>
          {more == false &&   <div onClick={()=> {
            setMore(true)
          }} className="Btn">{`<Смотреть больше работ/>`}</div>}
        
        </div>
 
    
       
        </div>
      </div>
    </>
  );
}
