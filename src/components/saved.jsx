import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import useStore from '../store/store';


function Saved() {
    const [savedJobs, setSavedJobs] = useState([]);

    
  const jobs = useStore((state) => state.jobs);
  const setJobs = useStore((state) => state.setJobs);
  
    useEffect(() => {
        setSavedJobs(jobs.filter(job => job.isBookMarked));
    }, [jobs]);

    const removeBookmark = (id) => {
        const updatedJobs = jobs.map((job) =>
            job.id === id ? { ...job, isBookMarked: false } : job
        );
        setJobs(updatedJobs);
    };

    return (
        <div className="mt-7  drop-shadow-md md:mr-5 lg:mr-10    rounded-xl border-gray border-2 bg-white h-[500px] w-[25%]">
            <div className="text-center pt-2 font-bold text-[20px]">Saved Jobs</div>
            {savedJobs.length > 0 ? (
                savedJobs.map((obj) => (
                    <div key={obj.id} className="p-2">
                        <div className="relative flex p-2 text-start rounded-xl border-2 mb-2">
                            <button 
                                className="absolute top-2 right-2 text-red-500"
                                onClick={() => removeBookmark(obj.id)}
                            >
                                <MdCancel />
                            </button>
                            <div>
                                <div className="font-semibold">{obj.title}</div>
                                <div className="text-gray-600">{obj.company}</div>
                                <div className="justify-center text-[12px] flex gap-3">
                                    <p>Remote</p>
                                    <p>$200-$800</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center mt-4 text-gray-500">No saved jobs</div>
            )}
        </div>
    );
}

export default Saved;
