import { useEffect } from 'react';
import './banner.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
    useEffect(() => {
      
        gsap.set(".Img_box img", { width: "40%" }); 
        gsap.to(".Img_box img", {
          width: "100%",
          scrollTrigger: {
            trigger: ".Img_box",
            start: "top 42%",
            end: "bottom 60%",
            scrub: true, 
           
            ease: "expo.inOut",
            
          }
        });
    
     
        gsap.to(".Title1 h1", {
          fontSize: "54px", 
          scrollTrigger: {
            trigger: ".Img_box",
            start: "top 42%",
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
            start: "top 42%", 
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
          src="https://s3-alpha-sig.figma.com/img/9b8a/6d11/de970a9951513e64ba2deb048b7f2cf3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZnPhsXk5AuMzwu-jLboyKW9qkF94PfIDOMJqt~V3cYjKhH8u7HS1b8FrHta50nezvGWFtgVTHRS4WclhfvcByqX5MMj5hC0-JKN~Ul-2-vq5T0OW-~QRs7F~eLx8Yn3wHfalugeznFMEgyLLBwGWZRYy952cuNEnUrdXlh1607WHQChSRCD3PRuldDEEq3SjhWuKZGd-9jTwsy41lUfzNfmvAXpVZBGGS6tXxofRPbNc8IT35YC9KH-LYgE-mWMyIqAJ-HDkWrsbHu-AwNzadW6oYFHMiWC2iNz0ZreICmDDNGBPAVD~Tx2TfTcLBZhSZ4BKrnIXBtZcmYmdAZPG7g__"
          alt="Example"
        />
      </div>
    </div>
  );
}
