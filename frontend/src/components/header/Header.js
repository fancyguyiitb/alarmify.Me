import React from "react";
import "./style.scss";
import { useNavigate } from "react-router";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import headerImg from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="logoTop">
        <img src={headerImg} alt="" />
      </div>
    </>
  );
};

export default Header;
