import { useEffect } from 'react';
import './banner.scss';



export default function Banner() {

  return (
    <div className='Banner'>
   <div className='Banner_container'>
    <div className='Mini_boxes_box'>
    
        <div className='back'>бэкенд</div>
        <div className='mob'>mobile app</div>
        <div className='ii'>ИИ интеграции</div>

        <div className='dev'>разработка</div>
        <div className='des'>дизайн</div>
        <div className='chat'>чат-бот</div>
 
        <div className='it'>IT Performance</div>
   
        <div className='front'>фронтенд</div>
        <div className='anal'>аналитика</div>
        <div className='man'>менеджмент</div>

    </div>
    <div className='Info_box'>Ваша команда по эффективной разработке</div>
   </div>
   </div>
  );
}
