function Evento(){

    function meuEvento(){
        console.log("Opa, Fui ativado")
    }
    return(
        <div>
            <p>    Clique para disparar um evento </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}
export default Evento
