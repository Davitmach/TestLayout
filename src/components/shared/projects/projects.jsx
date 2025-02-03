import { useRef ,useState,useEffect} from "react";
import "./projects.scss";
import useStore from "../../../store";
import { useInView } from 'react-intersection-observer';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'; 

export default function Projects() {
  
  const { ref, inView } = useInView({
    threshold: 0.9,  // Устанавливаем порог для видимости
  });

  const { activeSection, setActiveSection } = useStore();

  useEffect(() => {
    
    if (inView) {      
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

  // const style = {
  //   transform: `translateX(${move}px)`,
  //   transition: "transform 0.1s ease-out", 
  // };

  return (
    <>
      <div id="Service" className="Projects_box" ref={ref}>
        <div className="Info_box">
          <h1>Наши работы</h1>
          <span>Здесь можете оказаться вы</span>
        </div>
        <div className="Swipper">
      
            <div>
              <div className="Title_box">
                <h1>Создание сайтов</h1>
              </div>
              <div className="Img">
              <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Разработка ботов</h1>
              </div>
              <div className="Img">
              <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Веб-дизайн</h1>
              </div>
              <div className="Img">
              <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Mobile App</h1>
              </div>
              <div className="Img">
             <img src="" alt="" />
              </div>
            </div>
            <div>
              <div className="Title_box">
                <h1>Интеграция ИИ</h1>
              </div>
              <div className="Img">
              <img src="" alt="" />
              </div>
            </div>
          </div>
       
       
      </div>
    </>
  );
}
