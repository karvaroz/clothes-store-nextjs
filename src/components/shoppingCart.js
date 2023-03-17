import Product from "./product";
import { useAppContext } from "./stateWrapper";
import style from "../styles/ShoppingCart.module.css";
import { Fragment } from "react";

export default function ShoppingCart() {
    const cart = useAppContext();

    function handleClickClose() {
        cart.closeCart();
    }

    function getTotal() {
        const total = cart.items.reduce((acc, item) => acc + item.qty * item.price, 0)
        return total
    }

    return (
        <div
            className={style.shoppingCart}
            style={{ display: cart.isOpen ? "block" : "none" }}>

            <button onClick={handleClickClose} className={style.close}>Close</button>

            {cart.items.length === 0 ? (
                <div className={style.empty} >Cart is empty</div>
            ) : (
                <Fragment>
                    <h3>Your items</h3>
                    <div>
                        {cart.items.map((item) => (
                            <Product
                                key={item.id}
                                item={item}
                                showAs="ListItem"
                                qty={item.qty}
                            />
                        ))}
                    </div>
                    <div className={style.total} >Total: ${getTotal()} </div>
                </Fragment>
            )}
        </div>
    );
}
