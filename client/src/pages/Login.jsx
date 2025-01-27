import { NavLink } from "react-router-dom";
import Register from "./Register";
import { FormRow } from "./Register";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../ui/Logo";

function Login() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow
          type="email"
          lable="email"
          defaultValue="younessbourgui07@gmail.com"
          id="email"
          name="email"
        />
        <FormRow
          type="text"
          lable="password"
          defaultValue={123456}
          id="password"
          name="password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore the app
        </button>
        <p>
          Not a memeber yet?{" "}
          <NavLink to="/register" className="member-btn">
            Register
          </NavLink>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login;
