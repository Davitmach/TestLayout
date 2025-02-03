import { useEffect } from 'react';
import './banner.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
    useEffect(() => {
      
        gsap.set(".Img_box img", { width: "50%" }); 
        gsap.to(".Img_box img", {
          width: "100%",
          scrollTrigger: {
            trigger: ".Img_box",
            start: "top 22%",
            end: "bottom 60%",
            scrub: true, 

            ease: "expo.inOut",
            
          }
        });
    
     
        gsap.to(".Title1 h1", {
          fontSize: "54px", 
          scrollTrigger: {
            trigger: ".Img_box",
            start: "top 22%",
            end: "bottom 60%",
            scrub: true, 
            ease: "expo.inOut",
          },
          onStart: () => {
            if (window.innerWidth <= 768) {
              gsap.to(".Title1 h1", { fontSize: "20px" });
            }
          }
        });
    
        // Анимация для заголовка 2
        gsap.to(".Title2 h2", {
          fontSize: "26px",
          scrollTrigger: {
            trigger: ".Img_box",
            start: "top 22%", 
            end: "bottom 60%",
            scrub: true, 
         
            ease: "expo.inOut",
          },
          onStart: () => {
            if (window.innerWidth <= 768) {
              gsap.to(".Title2 h2", { fontSize: "15px" });
            }
          }
        });
      }, []);

  return (
    <div className="Banner_box">
      <div className="Info_box">
        <div className="Title1">
          <h1>Ваша команда по эффективной разработке</h1>
        </div>
        <div className="Title2">
          <h2>Веб-дизайн/ Боты/ Мобильные приложения/ Продуктовый менеджмент и аналитика</h2>
        </div>
      </div>
      <div className="Img_box">
        <img
          src="./banner.jpeg"
          alt="Example"
        />
      </div>
    </div>
  );
}
