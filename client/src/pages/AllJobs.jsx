import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { createContext } from "react";
import { useContext } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import JobWrapper from "../assets/wrappers/Job";
import JobInfoWrapper from "../assets/wrappers/JobInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

export const jobsLoader = async () => {
  try {
    const { data } = await customFetch.get("/jobs");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobContext = createContext();

function AllJobProvider({ children }) {
  const { jobs } = useLoaderData();
  console.log(jobs);
  return (
    <AllJobContext.Provider value={{ jobs }}>{children}</AllJobContext.Provider>
  );
}

function useAllJob() {
  const data = useContext(AllJobContext);
  return data;
}

export const JobsContainer = () => {
  const { jobs } = useAllJob();
  if (!jobs.length) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} job={job} />
        ))}
      </div>
    </Wrapper>
  );
};

export const SearchContainer = () => {
  return <h2>Search Container</h2>;
};

function Job({ job }) {
  const { _id, position, company, jobType, jobStatus, jobLocation, createdAt } =
    job;
  const date = day(createdAt).format("MMMM Do, YYYY");
  return (
    <JobWrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo text={jobLocation} icon={<FaLocationArrow />} />
          <JobInfo text={date} icon={<FaCalendarAlt />} />
          <JobInfo text={jobType} icon={<FaBriefcase />} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className="actions">
          <Link to={`../edit-job/${_id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-job/${_id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </JobWrapper>
  );
}

function JobInfo({ text, icon }) {
  return (
    <JobInfoWrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </JobInfoWrapper>
  );
}

function AllJobs() {
  return (
    <AllJobProvider>
      <SearchContainer />
      <JobsContainer />
    </AllJobProvider>
  );
}

export default AllJobs;
