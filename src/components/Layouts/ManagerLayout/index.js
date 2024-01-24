import classNames from "classnames/bind";
import styles from "./ManagerLayout.module.scss";
import Header from "~/components/Layouts/components/Header";
import LoginManager from "./LogInManager";
import { useState, useMemo } from "react";
import Sidebar from "./Sidebar";
import User from "./User";
import Product from "./Product";
import Order from "./Order";
import Revenue from "./Revenue";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function ManagerLayout() {
  const [logIn, setLogin] = useState(false);
 

  const state = useSelector(state => state.manager);
  const handleClickUnActive = () => {
    setLogin(!logIn);
  };

  const memoizedFormLogIn = useMemo(
    () => <LoginManager onClickUnActive={handleClickUnActive} />,
    [logIn]
  );

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}><Header /></div>
      {logIn && memoizedFormLogIn}
      <div className={cx("container")}>
        <Sidebar />
       {state.user && <User/>}
       {state.product && <Product/>}
       {state.order && <Order/>}
       {state.revenue && <Revenue/>}
      </div>
    </div>
  );
}

export default ManagerLayout;
