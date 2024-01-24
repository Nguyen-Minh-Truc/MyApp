import classNames from "classnames/bind";
import styles from "./Product.module.scss"
const cx = classNames.bind(styles);
function Product() {
    return ( <div className={cx("wapper")}>Product</div> );
}

export default Product;