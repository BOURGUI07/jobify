import { NavLink } from "react-router-dom";
import Login from "./Login";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../ui/Logo";

export function FormRow({ name, id, defaultValue, label, type }) {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          id="name"
          name="name"
          defaultValue="youness"
          label="name"
          type="text"
        />
        <FormRow
          id="lastname"
          name="lastname"
          defaultValue="bourgui"
          label="last name"
        />
        <FormRow
          type="text"
          id="location"
          name="location"
          defaultValue="safi"
          label="location"
        />
        <FormRow
          type="email"
          id="email"
          name="email"
          defaultValue="younessbourgui07@gmail.com"
          label="email"
        />
        <FormRow
          type="text"
          id="password"
          name="password"
          defaultValue={123456}
          label="password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?{" "}
          <NavLink to="/login" className="member-btn">
            Login
          </NavLink>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
