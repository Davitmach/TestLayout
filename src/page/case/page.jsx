import './style.scss';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Info = (props)=> {
return(
    <div className='Info_box'>
        <div><h1>{props.title}</h1></div>
        <div><p>{props.description}</p></div>
    </div>
)
}
const ImageSlider = ({ imagePaths }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextImage = () => {
        if (currentIndex < imagePaths.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
    };
  
    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
          }
    };
  if(imagePaths) {
    const link = imagePaths[currentIndex]
    const imgId = typeof link === "string" ? link.match(/id=([^&]+)/)?.[1] : "";
    
    return (
      <div className="image-slider">
   <div className='img'>
    <div><img width={400} src={imagePaths[currentIndex]}  /></div>
    <div className='btn'>
        <div onClick={prevImage} style={{transition:'.4s',opacity:currentIndex == 0?'0.5':'1' }}><svg width="50" height="94" viewBox="0 0 50 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 2L3 47L48 92" stroke="#FC739F" strokeWidth="3"/>
</svg>
</div>
        <div onClick={nextImage} style={{transition:'.4s',opacity:currentIndex == imagePaths.length-1?'0.5':'1' }}><svg width="50" height="94" viewBox="0 0 50 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L47 47L2 92" stroke="#FC739F" strokeWidth="3"/>
</svg>
</div>
    </div>
   </div>
   <div className='counter'>{`${currentIndex+1}/${imagePaths.length}`}</div>
      </div>
    );}
  };
export const Case = () => {
  const loc = useLocation();
  const [data, setData] = useState();

  // useEffect(() => {
    
  //   const queryParams = new URLSearchParams(loc.search);
  //   const caseDataString = queryParams.get('caseData');

  //   if (caseDataString) {
  //     try {
  //       // Deserialize the data from JSON
  //       const caseData = JSON.parse(caseDataString);
  //       console.log(caseData);
        
  //       setData(caseData);
  //     } catch (error) {
  //       console.error("Error parsing caseData:", error);
  //     }
  //   }
  // }, [loc]);

useEffect(()=> {
const data = localStorage.getItem('case');
const json = JSON.parse(data);
setData(json)


},[])

  useEffect(() => {
    console.log(data);
  }, [data]);
  const imgId = typeof data?.innerimg === "string" ? data?.innerimg.match(/id=([^&]+)/)?.[1] : "";
  const imgUrl = `https://lh3.googleusercontent.com/d/${imgId}=w1000-h1000`;

  
  return (
    <>
    <div className="case">
      <div className='Case_Banner_Container'>
        <div className='Img'><img src={data?.page.inner}/></div>
        <div className='Title'><div>{data?.title}</div></div>
      </div>
      </div>
      <div className="Case_Info_Container">
       {data?.page?.info.map((e,index)=> (
        <Info key={index} title={e.title} description={e.description}/>
       ))}
         <ImageSlider imagePaths={data?.page?.img}/>
      </div>
  
    </>
  );
};
