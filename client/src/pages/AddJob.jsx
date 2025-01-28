import Wrapper from "../assets/wrappers/DashboardFormPage";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { FormRow } from "./Register";
import { useDashboard } from "./DashboardLayout";

export const addJobAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job Added Successfully");
    return redirect("all-jobs");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function AddJob() {
  const { user } = useDashboard();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(user);
  const jobTypes = Object.values(JOB_TYPE);
  const jobStatus = Object.values(JOB_STATUS);
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" label="position" />
          <FormRow type="text" name="company" label="company" />
          <FormRow
            type="text"
            name="jobLocation"
            label="job location"
            defaultValue={user.location}
          />
          <FormRowSelect
            name="jobType"
            list={jobTypes}
            defaultValue={JOB_TYPE.FULLTIME}
            labelText="job type"
          />
          <FormRowSelect
            name="jobStatus"
            list={jobStatus}
            defaultValue={JOB_STATUS.PENDING}
            labelText="job status"
          />

          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sbmitting" : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
}

export const FormRowSelect = ({ labelText, name, defaultValue = "", list }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
      >
        {list.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default AddJob;
