import React from "react";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { deleteUser } from "~/redux/userSlice";
import { useState } from "react";
import { app } from "~/firebase";
import { getDatabase, ref, child, get, remove } from "firebase/database";

const cx = classNames.bind(styles);

function User() {
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.user);

  const listUser = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <FontAwesomeIcon
          icon={faXmark}
          className={cx("delete__user")}
          onClick={() => handleDeleteUser(user.id)}
        />
      </td>
    </tr>
  ));
  const dispatch = useDispatch();
  const dbRef = ref(getDatabase());

  const handleDeleteUser = async (userId) => {
    setLoading(true);
    try {
      await remove(child(dbRef, `data/listUsers/${userId}`));
      dispatch(deleteUser(userId));
    } catch (error) {
      console.error("Error removing user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cx("wrapper")}>
      <h4>Quản lí người dùng</h4>
      <div className={cx("list__user")}>
        <table>
          <thead>
            <tr>
              <th>stt</th>
              <th>họ tên</th>
              <th>số điện thoại</th>
              <th>địa chỉ</th>
              <th>xoá</th>
            </tr>
          </thead>
          <tbody>{listUser}</tbody>
        </table>
      </div>

      {loading && (
        <div className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
    </div>
  );
}
export default User;
