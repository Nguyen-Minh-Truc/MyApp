import { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routers";
import { DefaultLayout } from "~/components/Layouts";

import { getDatabase, ref, child, get } from "firebase/database";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { app } from "~/firebase";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const dbRef = ref(getDatabase());
    get(child(dbRef, `data/listUsers`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray = Object.values(snapshot.val());
          usersArray.forEach((user) => {
            dispatch(addUser(user));
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },[])
 

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
