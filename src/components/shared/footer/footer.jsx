import './footer.scss';

export default function Footer() {
    return(
       <footer>
        <div className='Footer_box'>
            <div>
                <ul>
                    <li>Join us:</li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Youtube</a></li>
                </ul>
            </div>
            <div>
            <ul>
                    <li>Contact us:</li>
                    <li><a href="">support@minders.com</a></li>
                    <li><a href="">+123 4567 89 10</a></li>
          
                </ul>
            </div>
            <div className='Description_box'>
                <div className='Description'><p>The information on this website is provided for general informational purposes only and does not constitute legal or professional advice. The information is accurate to the best of our knowledge for USA law. Use of this website constitutes acceptance of our <span>Terms of Use</span> and <span>Privacy Policy.</span></p></div>
                <div className='Rights'>All rights reserved. ©2021-2023 Minders.</div>
            </div>
        </div>
        <div className='Bg'></div>
       </footer>
    )
}