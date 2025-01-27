import styled from "styled-components";
import Wrapper from "./../assets/wrappers/LandingPage";
import { NavLink } from "react-router-dom";
import main from "../assets/images/main.svg";
import Logo from "../ui/Logo";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quaerat perspiciatis mollitia rerum cum obcaecati totam culpa
            eligendi non, similique recusandae ipsa voluptate magnam sequi quo
            quae aspernatur sapiente animi.
          </p>
          <NavLink to="/register" className="btn register-link">
            Register
          </NavLink>
          <NavLink to="/login" className="btn login-link">
            Login / Demo User
          </NavLink>
        </div>
        <div>
          <img src={main} className="img main-img" alt="job hunt" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Landing;
