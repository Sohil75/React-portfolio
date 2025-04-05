import React, { useEffect, useState } from 'react'
import "./Certificates.css";
export default function Certificates() {
  const [certificates,setCertificates]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const fetchCertificates = async()=>{
      try{
        const response = await fetch('/data/certifcate.json');
        if(!response.ok){
          throw new Error('Failed to fetch certificates');
        }
        const data = await response.json();
        setCertificates(data);
        setLoading(false);
      }
      catch(err){
        setError(err.message);
        setLoading(false);
        console.error("error fetching certificates",err);
        
      }
    };
    fetchCertificates();
  },[]);
  if(loading){
    return <div className='certificate-container'>Loading certificates...</div>
  }
  if(error){
    return <div className="certificate-container">Error: {error}</div>;
  }
  return (
    <section className='certificate-container'id='certificates'>
      <h1 className="certificate-title">
        CERTIFICATES
      </h1>
    <div className="certificates-slider">
      {
        certificates.map((cert)=>(
          <div key={cert.id} className="certificate-card">
            <div className="card-inner">
              <img src={cert.src} alt={cert.title} />
              <div className="card-content">
                <h3>{cert.title}</h3>
                <p>
                  <strong>Platform:</strong> {cert.platform} <br />
                  <strong>Date:</strong>{cert.date}
                </p>
                <a href={cert.link} target='_blank' rel='noopener noreferrer'>View Certificate</a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    </section>
  )
}
