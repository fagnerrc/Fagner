import './index.css';
export function Formulario (){
    return(
    <div className='formulario'>
        <form action="" method="post">
    <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" />
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" />
    </div>
    <div class="button">
        <button type="submit">Enviar sua mensagem</button>
    </div>
</form>
 
    </div>
       
    )
}