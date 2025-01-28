import { Form, NavLink, redirect, useNavigation } from "react-router-dom";
import Register from "./Register";
import { FormRow } from "./Register";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../ui/Logo";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Successful Login");
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
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
          type="password"
          lable="password"
          defaultValue="abcd1234"
          id="password"
          name="password"
        />
        <button disabled={isSubmitting} type="submit" className="btn btn-block">
          {isSubmitting ? "Submitting" : "Submit"}
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
      </Form>
    </Wrapper>
  );
}

export default Login;
