import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import './index.css';
export function Social(){
return(
    <div className='socialCorpo'>
        <ul className='social'>
            <li>
            <FaFacebook/>
            </li>
            <li>
            <FaInstagram/>
            </li>
            <li>
            <FaLinkedin/>
            </li>
            <li>
            <FaYoutube/>
            </li>
        </ul>
        
    </div>  
)
}