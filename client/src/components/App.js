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
            <Route path="/login" element={ <Login setUser={setUser} style={{ backgroundImage: `url(https://as2.ftcdn.net/v2/jpg/03/75/28/61/1000_F_375286189_to6PfpET55cHsuPStLf0V2Nbep6a7wEq.jpg)` }}/>}>
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
