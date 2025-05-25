function Pessoa(props){
    return(
        <div>
            <h2>Nome : {props.nome}</h2>
            <p>Idade : {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}

export default Pessoa