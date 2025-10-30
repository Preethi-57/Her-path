import React, { useEffect, useState } from 'react';
import { getResources } from '../api/api';

export default function Resources(){
  const [resources, setResources] = useState([]);
  useEffect(()=>{ getResources().then(res=>setResources(res.data)).catch(()=>setResources([])); },[]);
  return (
    <div>
      <h2>Verified Resources</h2>
      <div className="grid">
        {resources.length===0 && <p>No resources yet.</p>}
        {resources.map(r=>(
          <div key={r._id} className="card">
            <h3>{r.title}</h3>
            <p>{r.description}</p>
            <small>{r.category} • {r.location}</small>
            {r.url && <div><a href={r.url} target="_blank" rel="noreferrer">Visit</a></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
