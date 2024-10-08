import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./JobListing.css";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="job-listing-container">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <Link to={`/apply/${job.id}`} className="apply-button">
            Apply
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobListing;
