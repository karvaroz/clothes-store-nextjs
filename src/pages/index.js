import Layout from "@/components/layout";
import { getLatestItems } from "@/services/itemService";
import styleProduct from "../styles/Product.module.css"
import style from "../styles/Home.module.css";
import Product from "@/components/product";

export default function Home({ items }) {
  return (
    <div>
      <Layout title="welcome">
        <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <h2>Shop the Winter 2021 Collection</h2>
              <p>
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
              </p>
            </div>
          </div>
        </div>

        <h3>Latest Products</h3>
        <div className={styleProduct.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="item" />
            ))}
        </div>
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}