import ItemCount from "../Components/ItemCount";

const handleClick = () => {
    alert ("Se añadio Producto al carrito con éxito.")
    }    

const ItemListContainer = (props) => {
    return(
        <>
        <p>{props.greeting}</p>
        <ItemCount handleClick = {handleClick}
        />
        </>
    );
}
export default ItemListContainer;