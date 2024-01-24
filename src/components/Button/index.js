import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button({children, onClick}) {
    return  <button  className={cx("wapper")} onClick={onClick}>
                    {children}
            </button> ;
}

export default Button;