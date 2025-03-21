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
    return (
      <div className="image-slider">
   <div>
    <div><img width={400}  src={imagePaths[currentIndex]}/></div>
    <div>
        <div onClick={prevImage}><svg width="50" height="94" viewBox="0 0 50 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48 2L3 47L48 92" stroke="#FC739F" strokeWidth="3"/>
</svg>
</div>
        <div onClick={nextImage}><svg width="50" height="94" viewBox="0 0 50 94" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L47 47L2 92" stroke="#FC739F" strokeWidth="3"/>
</svg>
</div>
    </div>
   </div>
   <div>{`${currentIndex+1}/${imagePaths.length}`}</div>
      </div>
    );}
  };
export const Case = () => {
  const loc = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    
    const queryParams = new URLSearchParams(loc.search);
    const caseDataString = queryParams.get('caseData');

    if (caseDataString) {
      try {
        // Deserialize the data from JSON
        const caseData = JSON.parse(caseDataString);
        setData(caseData);
      } catch (error) {
        console.error("Error parsing caseData:", error);
      }
    }
  }, [loc]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className='Case_Banner_Container'>
        <div className='Img'><img src={data?.img}/></div>
        <div className='Title'><div>{data?.title}</div></div>
      </div>
      {/* <div className="Case_Info_Container">
       {data?.page.info.map((e,index)=> (
        <Info key={index} title={e.title} description={e.description}/>
       ))}
      </div>
    <ImageSlider imagePaths={data?.page?.img}/> */}
    </>
  );
};
