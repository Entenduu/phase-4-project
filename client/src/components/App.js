import React, { useEffect, useState } from "react";
import {  Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          <Routes>
            <Route path="/" element={<Home user={user}/>}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/signup" element={<Signup setUser={setUser} />}>
            </Route>
            <Route path="/login" element={ <Login setUser={setUser} />}>
            </Route>
            <Route path="/" element={ <Home />}>
            </Route>
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
