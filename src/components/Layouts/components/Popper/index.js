import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);

function Popper({Children}) {
    return (<div className={cx("wrapper")}>
            {Children}
    </div>);
}

export default Popper;