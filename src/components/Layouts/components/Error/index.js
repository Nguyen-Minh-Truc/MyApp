
import classNames from "classnames/bind";
import styles from "./Error.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Error({children}) {
  const alertClass = cx("alert", "alert-danger");

  return <div className={alertClass} role="alert">
          <div className={cx("error__icon")}><FontAwesomeIcon icon={faXmark} /></div>
          {children}
         </div>;
}
export default Error;
