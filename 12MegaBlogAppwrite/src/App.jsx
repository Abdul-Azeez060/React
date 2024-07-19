import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(userData);
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // if(loading){
  //   return (<div>Loading</div>)
  // }else {
  //   return (<>
  //   <h1>Posts</h1>
  //   </>)
  // }

  return !loading ? (
    <div>
      <div>
        this is header
        <main>{/* <Outlet/> */}</main>
        this is footer
      </div>
    </div>
  ) : (
    <div className=" text-orange-500 size-6 bg-slate-100">Loading</div>
  );
}

export default App;
