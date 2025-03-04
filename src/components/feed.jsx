import React, { useState } from "react";
import Job from "./job";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import useStore from '../store/store';

export default function Feed() {
  const jobs = useStore((state) => state.jobs);
  const setJobs = useStore((state) => state.setJobs);
  const validJobs = Array.isArray(jobs) ? jobs : [];

  const [query, setQuery] = useState("");

  const filteredJobs = validJobs.filter(job => {
    return job.title.toLowerCase().includes(query.toLowerCase());
  });

  
  const handleBookMark = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, isBookMarked: !job.isBookMarked } : job
    );

    setJobs(updatedJobs);
  };

  return (
    <>
      <div className="font-inter mb-4 mt-5 ml-6 md:ml-7 lg:ml-9 w-full md:w-[75%] h-auto md:h-[45%]">
        <div className="flex items-center justify-center h-12">
          <div className="bg-white rounded-[20px] flex h-full w-[500px] border-2 items-center justify-center">
            <IoSearch className="w-[24px] h-[24px] m-2" />
            <input 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              type="search" 
              placeholder="Job title, Keywords, or Company name" 
              className="text-[14px] h-full w-[70%] mr-1 appearance-none bg-transparent border-none focus:outline-none" 
              aria-label="Search jobs"
            />
            <div className="p-4">
              <Button 
                sx={{
                  backgroundColor: '#0034D1',    
                  height: "35px"
                }} 
                variant="contained"  
                disableElevation
                aria-label="Search"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id}>
              <Job
                logo={job.logo}
                title={job.title}
                company={job.company}
                type={job.type}
                salary={job.salary}
                isBookMarked={job.isBookMarked}
                description={job.description}
                handleBookMark={() => handleBookMark(job.id)}
                id={job.id}
              />
            </div>
          ))
        ) : (
          <div className="text-center mt-4 text-gray-500">
            No jobs found. Try adjusting your search criteria.
          </div>
        )}
      </div>
    </>
  );
}