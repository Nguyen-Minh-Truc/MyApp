import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "~/components/Button";
import FormSignUp from "../FormSignUp";
import FormLogIn from "../FormLogIn";
import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faRightFromBracket,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import Popper from "../Popper";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);
const Header = React.memo(() => {
  const [formSignUp, setFormSignUp] = useState(false);
  const [formLogIn, setFormLogIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const state = JSON.parse(localStorage.getItem("isUserLogIn"));
  const handleOnclickSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setFormSignUp(!formSignUp);
      setLoading(false);
    }, 300);
  };

  const handleOnclickLogIn = () => {
    setLoading(true);
    setTimeout(() => {
      setFormLogIn(!formLogIn);
      setLoading(false);
    }, 300);
  };

  const memoizedFormSignUp = useMemo(
    () => <FormSignUp onClickUnActive={handleOnclickSignUp} />,
    [formSignUp]
  );

  const memoizedFormLogIn = useMemo(
    () => <FormLogIn onClickUnActive={handleOnclickLogIn} />,
    [formLogIn]
  );

  const userCurrent = JSON.parse(localStorage.getItem("isUserLogIn"));
  const handleClickLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("isUserLogIn");
      setLoading(false);
    }, 300);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <header>
      <div className={cx("wapper")}>
        <div className={cx("sect")}>
          <div
            className={cx("men", { active: activeItem === 0 })}
            onClick={() => handleItemClick(0)}
          >
            Nam
          </div>
          <div
            className={cx("man", { active: activeItem === 1 })}
            onClick={() => handleItemClick(1)}
          >
            Nữ
          </div>
        </div>
        <Link to={"/"} className={cx("logo")}>
          <img
            alt="SomeHow"
            src="//theme.hstatic.net/1000026602/1001189245/14/logo.jpg?v=52"
          />
        </Link>
        {!userCurrent ? (
          <div className={cx("signIn")}>
            <div onClick={handleOnclickLogIn} className={cx("LogIn")}>
              Log In
            </div>

            <Button onClick={handleOnclickSignUp}>
              <div className={cx("signUp")}>Sign Up</div>
            </Button>
          </div>
        ) : (
          <div className={cx("icon__header")}>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div>
              <HeadlessTippy
                interactive
                render={(attrs) => (
                  <Popper
                    Children={
                      <div className={cx("box")} tabIndex="-1" {...attrs}>
                        <div className={cx("tippyhead")}>
                          <div className={cx("name__user")}>
                            Tên : {state.name}
                          </div>
                          <div className={cx("phone__user")}>sdt : </div>
                        </div>
                        <div
                          className={cx("log_out")}
                          onClick={handleClickLogOut}
                        >
                          <FontAwesomeIcon icon={faRightFromBracket} />
                        </div>
                      </div>
                    }
                  />
                )}
              >
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </HeadlessTippy>
            </div>
            <div>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        )}
      </div>
      {formLogIn && memoizedFormLogIn}
      {formSignUp && memoizedFormSignUp}
      {loading && (
        <div className={cx("loading")}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
    </header>
  );
});

export default Header;
