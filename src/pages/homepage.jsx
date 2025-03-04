import Feed from '../components/feed';
import Saved from '../components/saved';
import Filter from '../components/filter';
import Pagination from '../components/pagination';
import React, { useEffect, useState } from 'react';
import Hero from '../components/hero';
import useStore from '../store/store';

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const [totalPosts, settotalPosts] = useState(1);

  // Access jobs and setJobs directly from the global store
  const jobs = useStore((state) => state.jobs);
  const setJobs = useStore((state) => state.setJobs);

  const api = `https://joblisting-rd8f.onrender.com/api/jobs?limit=${postPerPage}&pages=${currentPage}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(api);
        const data = await result.json();
        setJobs(data.jobs);
        settotalPosts(data.total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage, postPerPage, setJobs]); // Added setJobs to dependency array

  const pagination = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= Math.ceil(totalPosts / postPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className='bg-[#F3F3F3]'>
      <Hero />
      <div className='flex mt-4 justify-between w-[100vw] h-1/3'>
        {/* No need to pass jobs as props */}
        <Filter />
        <Feed />
        <Saved />
      </div>
      <Pagination 
        pagination={pagination} 
        totalJobs={totalPosts} 
        postPerPage={postPerPage} 
      />
    </div>
  );
}

export default HomePage;