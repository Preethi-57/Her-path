import React, { useEffect, useState } from 'react';
import { getSchemes } from '../api/api';

export default function Schemes(){
  const [schemes, setSchemes] = useState([]);
  useEffect(()=>{ getSchemes().then(res=>setSchemes(res.data)).catch(()=>setSchemes([])); },[]);
  return (
    <div>
      <h2>Government Schemes</h2>
      <div className="grid">
        {schemes.length===0 && <p>No schemes yet.</p>}
        {schemes.map(s=>(
          <div key={s._id} className="card">
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            {s.url && <div><a href={s.url} target="_blank" rel="noreferrer">Details</a></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
