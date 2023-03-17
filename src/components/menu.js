import Link from "next/link";
import style from "../styles/Menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
    const cart = useAppContext();

    function handleOpenCart() {
        cart.openCart();
    }

    return (
        <nav className={style.menu}>
            <section>
                <Link
                    href="/"
                    className={style.link}>
                    Home
                </Link>
                <Link
                    href="/store"
                    className={style.link}>
                    Store
                </Link>
                <Link
                    href="/faq"
                    className={style.link}>
                    FAQ
                </Link>
            </section>

            <section>
                <Link
                    href="#"
                    className={style.link}
                    onClick={handleOpenCart}>
                    Cart ({cart.getNumberOfItems()})
                </Link>
            </section>
        </nav>
    );
}
