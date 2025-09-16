import withLoading from "../../hoc/withLoading";
import styles from "./ProductList.module.scss";

const ProductList = withLoading(() => {
    const products = ["iPhone", "Samsung", "Xiaomi"];

    return (
        <div className={styles.productList}>
            <h3>Danh sách sản phẩm</h3>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
});

export default ProductList;
