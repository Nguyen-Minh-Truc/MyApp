import classNames from "classnames/bind";
import styles from "./LogInManager.module.scss";
import Button from "~/components/Button";
import { useState } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function FormLogIn({onClickUnActive}) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const users = useSelector(state => state.admin);

  
  const handleLogIn = (e) => {
    e.preventDefault();

if (!name || !pass) {
  alert("Vui lòng nhập đầy đủ thông tin.");
  return;
}
const matchedUser = users.find((user) => user.name === name.trim() && user.pass === pass.trim() && user.isAdmin === true);
if (!matchedUser) {
  alert("Tài khoản không tồn tại.");
  return;
}
onClickUnActive();
}
  return (
    <div className={cx("wapper")}>
    <div
      className={cx("blur__bachkground")}
    ></div>
    <form className={cx("form_signUp")}>
      <div className={cx("form__wapper")}>
        <div className={cx("title")}>Some How</div>
        <div className={cx("form_control")}>
          <label htmlFor="user_name" className={cx("form__lable")}>
            Tên Đăng Nhập:
          </label>
          <input type="text" name="user_name" className={cx("input_name")} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={cx("form_control")}>
          <label htmlFor="user_pass" className={cx("form__lable")}>
            Mặt Khẩu:
          </label>
          <input type="password" name="user_pass" className={cx("input_pass")} value={pass} onChange={(e) => setPass(e.target.value)} />
        </div>
        <div className={cx("form_submit")}>
          <Button onClick={handleLogIn}>
              Đăng Nhập
          </Button>
        </div>

      </div>
    </form>
  </div>
  );
}

export default FormLogIn;
