import classNames from "classnames/bind";
import styles from "./FormSignUp.module.scss";
import Button from "~/components/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "~/redux/userSlice";
import { getDatabase, ref, set, push, get } from "firebase/database";
import Error from "../Error";

const cx = classNames.bind(styles);
function FormSignUp({ onClickUnActive }) {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confimPass, setConfimPass] = useState("");
  const [error, setError] = useState(null)
  const dispatch = useDispatch();

  const handleOnclickActive = () => {
    onClickUnActive();
  };
  const users = useSelector((state) => state.user);
  const handleSignUP = async (e) => {
    e.preventDefault();
    const existingUser = users.find((user) => name.trim() === user.name);
    if (existingUser) {

      setError("Tên đăng nhập đã tồn tại.");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    if (!name || !pass || !confimPass) {
      setError("Vui lòng nhập đầy đủ thông tin.");
    
      setTimeout(() => {
        setError(null);
      }, 3000);
    
      return;
    }

    if (pass.trim() !== confimPass.trim()) {
      setError("Nhập lại mật khẩu không đúng.");
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    let id = users.length + 1;
    const newUser = {
      id,
      name,
      pass,
      phone: "",
      address: "",
    };

    await writeUserData(
      newUser.id,
      newUser.name,
      newUser.pass,
      newUser.phone,
      newUser.address
    );
    await dispatch(addUser(newUser));
    setName("");
    setPass("");
    setConfimPass("");
    await onClickUnActive();
  };

  const writeUserData = async (id, name, pass, phone, address) => {
    try {
      const db = getDatabase();
      const usersRef = ref(db, `data/listUsers/${id}`);
  
      const newUserData = {
        id,
        name,
        pass,
        phone: "",
        address: "",
      };
  
      await set(usersRef, newUserData);
  
    } catch (error) {
      console.error("Lỗi khi thêm người dùng vào danh sách:", error);
      throw error;
    }
  };

  return (
    <div className={cx("wapper")}>
     {error &&  <Error children ={error}/>}
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
          <div className={cx("form_control")}>
            <label htmlFor="user_confirmPass" className={cx("form__lable")}>
              Nhập Lại Mật Khẩu:
            </label>
            <input
              type="password"
              name="user_confirmPass"
              className={cx("input_comfirmPass")}
              value={confimPass}
              onChange={(e) => setConfimPass(e.target.value)}
            />
          </div>
          <div className={cx("form_submit")}>
            <Button onClick={handleSignUP}>Đăng kí</Button>
          </div>
        </div>
      </form>


    </div>
  );
}

export default FormSignUp;
