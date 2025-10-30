import React, { useEffect, useState } from 'react';
import { getJobs } from '../api/api';

export default function Jobs(){
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{ getJobs().then(res=>setJobs(res.data)).catch(()=>setJobs([])); },[]);
  return (
    <div>
      <h2>Jobs</h2>
      <div className="grid">
        {jobs.length===0 && <p>No jobs yet.</p>}
        {jobs.map(j=>(
          <div key={j._id} className="card">
            <h3>{j.title}</h3>
            <p>{j.company} • {j.location}</p>
            <p>{j.description}</p>
            {j.applyUrl && <div><a href={j.applyUrl} target="_blank" rel="noreferrer">Apply</a></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
