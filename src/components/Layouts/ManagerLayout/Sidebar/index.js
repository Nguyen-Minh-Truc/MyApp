import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { update,startLoading } from "~/redux/Manager";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar() {
    const state = useSelector((state) => state.manager);
    const dispatch = useDispatch();
  
    const handleUpdate = (updatedState) => {
      dispatch(startLoading()); 
      setTimeout(() => {
        dispatch(update(updatedState)); 
      }, 500);
    };
  
    return (
      <div className={cx("wrapper")}>
        <div className={cx("head")}>
          <div className={cx("icon_admin")}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={cx("name_admin")}>ADMIN</div>
        </div>
        <div className={cx("body")}>
          <p className={cx("manager_user")} onClick={() => handleUpdate({ user: true, product: false, order: false, revenue: false })}>
            Quản lý người dùng
          </p>
          <p className={cx("manager_product")} onClick={() => handleUpdate({ user: false, product: true, order: false, revenue: false })}>
            Quản lý sản phẩm
          </p>
          <p className={cx("manager_order")} onClick={() => handleUpdate({ user: false, product: false, order: true, revenue: false })}>
            Quản lý đơn hàng
          </p>
          <p className={cx("revenue")} onClick={() => handleUpdate({ user: false, product: false, order: false, revenue: true })}>
            Doanh thu
          </p>
        </div>
        {state.isLoading &&  <div className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} spin/> 
        </div>}
      </div>
    );
  }
  
 

export default Sidebar;
