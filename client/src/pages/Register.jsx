import { Form, NavLink, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../ui/Logo";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

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

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Successful Registration");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Register() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
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
          id="lastName"
          name="lastName"
          defaultValue="bourgui"
          type="text"
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
          type="password"
          id="password"
          name="password"
          defaultValue="abcd1234"
          label="password"
        />
        <button disabled={isSubmitting} type="submit" className="btn btn-block">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p>
          Already a member?{" "}
          <NavLink to="/login" className="member-btn">
            Login
          </NavLink>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
