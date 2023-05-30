// Imgs

import { useState } from "react";
import { NavLink } from "react-router-dom";




export function Navbar() {

  const [lang, setLang] = useState(true)

  let langFunc = () => {
    setLang(!lang)
  }


  return (
    <div className="Navbar">
      <div className="nav__Router">
        <NavLink to={"/"}>BOSH SAHIFA</NavLink>
        <NavLink to={"/bizhaqimizda"}>BIZ HAQIMIZDA</NavLink>
        <NavLink to={"/xizmatlar"}>XIZMATLAR </NavLink>
        <NavLink to={"/galereya"}>GALAREYA </NavLink>
        <NavLink to={"/murojatuchun"}>MUROJAT UCHUN</NavLink>
      </div>
      <div onClick={langFunc} className="nav__Language-Btn">
        {lang ? "uz" : "ru"}
      </div>
    </div>
  );
}
