import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/components/Layouts/components/Header";

const cx = classNames.bind(styles);

function DefaultLayout() {
  const backgrounds = [
    {
      id: 1,
      img: "//theme.hstatic.net/1000026602/1001189245/14/slideshow_1.jpg?v=52"
    },
    {
      id: 2,
      img: "//theme.hstatic.net/1000026602/1001189245/14/slideshow_2.jpg?v=52"
    }
  ];

  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) =>
        (prevIndex + 1) % backgrounds.length
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div>
          <img
            className={cx("background")}
            alt=""
            src={backgrounds[currentBackgroundIndex].img}
          />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
