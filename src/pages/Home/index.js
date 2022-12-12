
import './index.css';
import { Conteudo } from "../../components/Conteudo"
import { Social } from '../../components/Social';
import { Logo } from "../../components/Logo"
import { Perfil } from "../../components/Perfil"
export default function Home() {

    return (
        <div className="divcontainer">
            <Logo />
            <Perfil />
            <Conteudo/>
            <Social/>
        </div>
    )

}