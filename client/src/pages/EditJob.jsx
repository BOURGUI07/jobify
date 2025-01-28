import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { FormRow } from "./Register";
import { FormRowSelect } from "./AddJob";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";

export const getJobLoader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/all-jobs");
  }
};
export const editJobAction = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job Updated Successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function EditJob() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { job } = useLoaderData();
  const { position, company, jobLocation, jobType, jobStatus } = job;
  const jobTypes = Object.values(JOB_TYPE);
  const jobStatuses = Object.values(JOB_STATUS);
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow name="position" type="text" defaultValue={position} />
          <FormRow name="company" type="text" defaultValue={company} />
          <FormRow name="jobLocation" type="text" defaultValue={jobLocation} />
          <FormRowSelect
            name="jobType"
            list={jobTypes}
            defaultValue={jobType}
            labelText="job type"
          />
          <FormRowSelect
            name="jobStatus"
            list={jobStatuses}
            defaultValue={jobStatus}
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

export default EditJob;
