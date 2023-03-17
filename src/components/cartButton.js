import style from "../styles/CartButton.module.css"
import { useAppContext } from "./stateWrapper"
export default function CartButton({ item }) {
    const cart = useAppContext()

    function handleClick() {
        cart.addItemToCart(item)
    }

    return <button className={style.button} onClick={handleClick} >Add to Cart</button>
}