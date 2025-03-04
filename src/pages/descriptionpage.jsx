import React from "react";
import Button from "@mui/material/Button";
import Search from "../components/search";
import { useParams } from "react-router-dom";
import useStore from "../store/store"; 

function Description() {
  const { id } = useParams(); 
  const jobs = useStore((state) => state.jobs);

  console.log(`params id: ${id}`); 


  const job = jobs.find((job) => job.id === id);

  console.log(`job: ${job}`); 
  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="h-screen bg-[#F3F3F3]">
      <div className="flex justify-around p-4">
        <div className="w-[1000px]">
          <Search />
          <div className="w-[800px] h-[480px] ml-[100px] mt-[30px] rounded-xl border-gray border-2 bg-white">
            <div className="flex bg-white h-[100px] gap-2">
              <div className="w-[138px] h-[138px]">
                <img src={job.logo} alt={`${job.company} logo`} /> {/* Use dynamic logo */}
              </div>
              <div className="flex flex-col place-content-center w-[800px]">
                <p className="font-bold">{job.title}</p> {/* Use dynamic title */}
                <p>{job.company}</p> {/* Use dynamic company */}
              </div>
              <div className="flex place-items-end m-2">
                <Button variant="contained" disableElevation>
                  Apply
                </Button>
              </div>
              <div className="flex items-start md:ml-auto gap-3">
                <button>
                  {/* <CiBookmark className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" /> */}
                </button>
                <button>
                  {/* <IoShareSocialOutline className="w-8 h-8 sm:w-7 sm:h-8 md:w-10 md:h-12 lg:w-[36px] lg:h-[36px] xl:w-[36px] xl:h-[36px]" /> */}
                </button>
              </div>
            </div>
            <div className="flex">
              <div className="flex ml-[25px] flex-col ml-2 w-[500px]">
                <div>
                  <h1 className="font-bold">Job Type</h1>
                  <p>{job.type}</p> {/* Use dynamic job type */}
                </div>
                <div>
                  <h1 className="font-bold">Location</h1>
                  <p>{job.location}</p> {/* Use dynamic location */}
                </div>
                <div>
                  <h1 className="font-bold">Experience</h1>
                  <p>{job.experience}</p> {/* Use dynamic experience */}
                </div>
                <div>
                  <h1 className="font-bold">Number of</h1>
                  <h1 className="font-bold">Applicants:</h1>
                  <p>{job.applicants}</p> {/* Use dynamic number of applicants */}
                </div>
              </div>
              <div className="mx-6">
                <h1 className="font-[500]">Job description</h1>
                <p>{job.description}</p> {/* Use dynamic description */}
                <h1 className="font-[500]">Key Responsibilities</h1>
                <p>{job.responsibilities}</p> {/* Use dynamic responsibilities */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[80px] mr-[150px] rounded-xl border-gray border-2 bg-white w-[250px]">
          <div className="text-center font-[600] mt-3 mb-3">Related</div>
          <div className="w-[213px] h-[100px] rounded-[10px] border ml-2 border-[1px] mt-2 pb-[16px] pl-[8px] gap-[8px]">
            <div className="flex m-1">
              <div className="w-[50px] h-[60px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3bb8/563e/6d2dd4de608d26010214a61c4b364230?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cd57pZAiiIG4muZr2JxObKpuhwCqVNxDMUgvF0pH3sBKklqssW3wuWCa~evChz3LBMfu5vNXx-RcCOy1COyJ-mo7xgoTS0Wo8geZLrTEfNdQs~RkO~C1whmVGjn39aMWGBItZrMj9yOE7rq6EfKjLS901GAHr8mZZjsfH-qT4TsHInzMo8~K2Yo6do6vBzs0vMEjfn0dIqZ7JKu1hbV0YD6gVEaGWsm2nZQDA0gl~t3oElB~9opLR74cOc7PWs3QF3RFLwLPqICBwsWU~CRXb4gtu~b4quYOhmAPSALDVwiSub9K-wz24e96RvaVPuTNLylyYBxZKDbC1-HMFJbofA__"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-[460]">UI/UX Designer</h1>
                <p className="font-[100]">Barone LLC.</p>
              </div>
            </div>
            <div className="flex gap-2 ml-8">
              <p className="bg-gray-200 font-[100] text-[14px]">Remote</p>
              <p className="bg-gray-200 font-[100] text-[14px]">$200- $800</p>
            </div>
          </div>
          <div className="w-[213px] h-[100px] rounded-[10px] border ml-2 border-[1px] mt-2 pb-[16px] pl-[8px] gap-[8px]">
            <div className="flex m-1">
              <div className="w-[50px] h-[60px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/3bb8/563e/6d2dd4de608d26010214a61c4b364230?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cd57pZAiiIG4muZr2JxObKpuhwCqVNxDMUgvF0pH3sBKklqssW3wuWCa~evChz3LBMfu5vNXx-RcCOy1COyJ-mo7xgoTS0Wo8geZLrTEfNdQs~RkO~C1whmVGjn39aMWGBItZrMj9yOE7rq6EfKjLS901GAHr8mZZjsfH-qT4TsHInzMo8~K2Yo6do6vBzs0vMEjfn0dIqZ7JKu1hbV0YD6gVEaGWsm2nZQDA0gl~t3oElB~9opLR74cOc7PWs3QF3RFLwLPqICBwsWU~CRXb4gtu~b4quYOhmAPSALDVwiSub9K-wz24e96RvaVPuTNLylyYBxZKDbC1-HMFJbofA__"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-[460]">UI/UX Designer</h1>
                <p className="font-[100]">Barone LLC.</p>
              </div>
            </div>
            <div className="flex gap-2 ml-8">
              <p className="bg-gray-200 font-[100] text-[14px]">Remote</p>
              <p className="bg-gray-200 font-[100] text-[14px]">$200- $800</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;