import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Lambo" ano_lancamento={1999}/>
            <Item/>
        </ul>

        </>

    )
}
export default List