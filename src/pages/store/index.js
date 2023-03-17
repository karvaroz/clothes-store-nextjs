import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/itemService";
import style from "../../styles/Product.module.css"

export default function Index({ items }) {
    return (
        <Layout title="Store">
            <h2>Store</h2>
            <div className={style.items}>
                {items &&
                    items.map((item) => (
                        <Product
                            key={item.id}
                            item={item}
                            showAs="Default"
                        />
                    ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await getItems();
    return {
        props: {
            items: res,
        },
    };
}
