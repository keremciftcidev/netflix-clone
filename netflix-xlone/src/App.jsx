import "./App.css";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginScreen from "../screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch ,useSelector} from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "../screens/ProfileScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
