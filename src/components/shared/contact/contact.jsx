import { useState ,useEffect} from 'react';
import './contact.scss';
import useStore from '../../../store';

import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.5,  
      });
    
      const { activeSection, setActiveSection } = useStore();
    
      useEffect(() => {
        
        
        if (inView) {
          setActiveSection(3);  
        }
      }, [inView]);  
    const [active,setActive] = useState('');
    const HandleActive = (payload) => {
        if(payload == active) {
            setActive('')
        }

        else {
        setActive(payload);
        }
    }

    return(
      <div id='Contact' className='Contact_box' ref={ref}>
        <div>
        <div className="Options_box">
            <div className="Title_box">
                <h2>Как мы работаем? </h2>
                <h1>Несколько шагов до начала проекта</h1>
            </div>
            <div className="Options">
                <div style={{display:'flex'}} className={active == '1'?'Active' :''} onClick={()=> HandleActive('1')}>
                    <div >   <div className="Title">1. Обсуждаем проект, определяем подходим ли мы друг другу. </div>
                   {active == '1' && <div className="Info_box">
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>В самом начале важно понять, совпадают ли наши взгляды, ожидания и подходы к работе. Для этого мы проводим встречу (онлайн или офлайн), на которой обсуждаем ключевые моменты:<br/>

- Какую проблему нужно решить?<br/>
- Какой результат вы хотите получить?<br/>
- Как вы представляете процесс работы с нами?<br/>
-Есть ли у вас техническое задание, дизайн, референсы?<br/>

На этом этапе мы задаем много вопросов, чтобы определить, можем ли мы реализовать проект так, чтобы он приносил реальную пользу. Если мы видим, что наши компетенции или методология не подходят под запрос заказчика, мы честно говорим об этом. Важно не просто взять проект в работу, а сделать его качественно и эффективно.</div>
                    </div>}</div>
                    <div><svg style={active == '1' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>
                 
                </div>
                <div className={active == '2'?'Active' :''} onClick={()=> HandleActive('2')}>
                    <div> <div className="Title">2. Детализируем ваши хотелки в проекте</div>
                   {active == '2' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>После того как мы поняли, что готовы работать вместе, переходим к детализации. Часто заказчики приходят с размытыми формулировками типа «Нам нужен удобный сайт.» Мы помогаем превратить эти желания в конкретные задачи:
<br/>
- Определяем целевую аудиторию проекта<br/>
- Разбираем функционал: какие элементы важны, а от каких можно отказаться<br/>
- Уточняем, как будет выглядеть пользовательский путь<br/>
- Подбираем технологии, которые лучше всего подойдут для реализации<br/>

Этот этап помогает избежать ситуации, когда в середине проекта появляются новые идеи, усложняющие процесс разработки. Мы заранее обсуждаем все детали, чтобы работа шла четко по плану.
 
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '2' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '3'?'Active' :''} onClick={()=> HandleActive('3')}>
                    <div> <div className="Title">4. Определяем сроки и бюджет. </div>
                   {active == '3' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Когда структура проекта становится понятной, мы переходим к самому важному – срокам и бюджету. Здесь мы:
<br/>
- Оцениваем сложность проекта<br/>
- Разбиваем работу на этапы и определяем дедлайны<br/>
- Закладываем время на тестирование и возможные правки<br/>
<br/>
Мы всегда стараемся быть реалистами: не обещаем разработку за пару недель, если на это объективно требуется несколько месяцев. Честность в оценке сроков – залог того, что проект не затянется и не превратится в бесконечный процесс доработок.<br/>
<br/>
С бюджетом та же история. Мы объясняем, какие работы входят в стоимость, на чем можно сэкономить, а где экономия приведет к проблемам.
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '3' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
                <div className={active == '4'?'Active' :''} onClick={()=> HandleActive('4')}>
                    <div> <div className="Title">4. Решаем формальности и приступаем к работе.</div>
                   {active == '4' &&<div className="Info_box">
                        <div className="White">
                       </div>
                        <div className="Purple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10L20 15L15 20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 4V11C4 12.0609 4.42143 13.0783 5.17157 13.8284C5.92172 14.5786 6.93913 15 8 15H20" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>Когда все детали согласованы, определяем формат отношений, прописываем техническое задание и приступаем к разработке. Этот этап включает:
<br/>
- Заключение договора, где фиксируются сроки, этапы работы и условия сотрудничества <br/>
(либо договариваемся в свободной форме, здесь индивидуально) <br/>
- Подписание технического задания, которое станет основой для всех последующих работ<br/>
- Подготовку всех необходимых доступов и материалов от заказчика<br/>

После этого мы погружаемся в процесс разработки, тестируем продукт, показываем промежуточные результаты и постепенно доводим проект до финального запуска.<br/>
<br/>
Главное, что мы ценим в работе – прозрачность, четкие договоренности и уважение к процессу. Поэтому наша задача – не просто выполнить заказ, а сделать так, чтобы продукт был удобным, полезным и работал так, как нужно бизнесу.
</div>
                    </div> } 
                    </div>
                    <div><svg style={active == '4' ? {transform:'rotate(0deg)'} :{transform:'rotate(180deg)'}} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12L11.5 1L1 12" stroke="#0C2200" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                   
                </div>
            </div>
            <div className="Btn"><a href="mailto:hello@itperfomance.ru">{'<Написать нам на почту/>'}</a></div>
 
        </div>
       
      </div></div>
    )
}