import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ItemCount  = ({handleClick}) => {
const [valor, setValor] = useState(0);

const handleAumentar = () => {
    setValor (valor + 1);
    console.log(valor)
}

const handleDisminuir = () => {
    setValor (valor - 1);
    console.log(valor)
}

return(
    <div>
    <Button onClick={handleAumentar}> + </Button> {valor} <Button onClick = {handleDisminuir}> - </Button> <Button onClick={handleClick}> 
    Añadir al carrito </Button>
    </div>
);
}
export default ItemCount;
