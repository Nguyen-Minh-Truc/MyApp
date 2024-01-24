import classNames from "classnames/bind";
import styles from "./FormLogIn.module.scss";
import Button from "~/components/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import Error from "../Error";

const cx = classNames.bind(styles);

function FormLogIn({ onClickUnActive }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const users = useSelector((state) => state.user);

  const handleOnclickActive = () => {
    onClickUnActive();
  };
  console.log(users);

  const handleLogIn = (e) => {
    e.preventDefault();

    if (!name || !pass) {
      setError("Vui lòng nhập đầy đủ thông tin.");

      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    const matchedUser = users.find(
      (user) => user.name.trim() === name.trim() && user.pass === pass.trim()
    );

    if (!matchedUser) {
      setError("Tên đăng nhập hoặc mật khẩu không đúng.");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    let isUserLogIn = true;
    const userCurrent = {
      name,
      pass,
      isUserLogIn,
    };
    localStorage.setItem("isUserLogIn", JSON.stringify(userCurrent));
    onClickUnActive();
  };
  return (
    <div className={cx("wapper")}>
      {error && <Error children={error} />}
      <div
        onClick={handleOnclickActive}
        className={cx("blur__bachkground")}
      ></div>
      <form className={cx("form_signUp")}>
        <div className={cx("form__wapper")}>
          <div className={cx("title")}>Some How</div>
          <div className={cx("form_control")}>
            <label htmlFor="user_name" className={cx("form__lable")}>
              Tên Đăng Nhập:
            </label>
            <input
              type="text"
              name="user_name"
              className={cx("input_name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={cx("form_control")}>
            <label htmlFor="user_pass" className={cx("form__lable")}>
              Mặt Khẩu:
            </label>
            <input
              type="password"
              name="user_pass"
              className={cx("input_pass")}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className={cx("form_submit")}>
            <Button onClick={handleLogIn}>Đăng Nhập</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogIn;
