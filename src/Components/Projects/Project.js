import React,{useState,useEffect} from 'react'
import { useInView } from "react-intersection-observer";
import "./project.css";
import { PiLinkSimpleLight } from "react-icons/pi";


export default function Project() {
    const{ref,inView}=useInView({triggerOnce:true,threshold:0.2});
    const [projects, setProjects]= useState([]);

    const [showAll,SetShowAll]=useState(false);
    useEffect(()=>{
        fetch('/data/project.json')
        .then(response=>response.json())
        .then(data=>setProjects(data))
        .catch(error=>console.error("Error fetching projects",error)
        );
    },[]);
    const visibleProjects= showAll ? projects : projects.slice(0,3);
  return (
    <section className="project-section" id='project'>
        <h2>PROJECTS</h2>
        {
            projects.length=== 0 ? (
                <p>Loading projects...</p>
            ):(
                <div className="projects-container">
                    {
                        visibleProjects.map((project,index)=>(
                            <div key={project.id} className={`project-item ${index%2===0 ? 'image-right':'image-left'}`}>
                                <div className='project-image'>
                                    <img src={project.image} alt={project.title} />
                                    <div className="overlay">
                                    <a href={project.link} className='link-wrapper'><PiLinkSimpleLight className='link-icon'/></a>
                                    </div> 
                                </div>
                                <div className='project-content'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    
                                </div>
                            </div>
                        ))}
                </div>
            )
        }
        {
            projects.length >3 && !showAll &&(
                <button className='load-more-btn' onClick={()=>SetShowAll(true)}>
                    Load More
                </button>
            )
        }
    </section>
  );
};
