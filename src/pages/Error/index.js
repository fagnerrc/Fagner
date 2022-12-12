import { Link } from "react-router-dom"
import { Logo } from "../../components/Logo"

export default _=>
(
    <div className="erro">
        <Logo />
        <h1>Pagina Não Encontrada</h1>
        <p>Essa pagina não existe!</p>
        <Link className="link" to="/">
            Voltar pra Home
        </Link>
    </div>
)