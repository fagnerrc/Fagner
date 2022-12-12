import './index.css';
import { Link } from "react-router-dom"
export function Logo (){
    return(
<Link to="/">
    <div className='logo'>
    <h1 className="log"><span className="logo2">Fagner Rocha Cangussu</span></h1>
    </div>
    </Link>
)
}