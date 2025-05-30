import React, { useEffect, useState } from 'react'
import "./services.css";
import { CgWebsite } from "react-icons/cg";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { BsAndroid2 } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaLinux ,
    FaAws 
} from "react-icons/fa";
import { SiExpress ,SiAndroidstudio  } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

export default function Services() {
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [skills,setSkills]=useState([]);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(()=>{
        const fetchSkills= async()=>{
            try{
                const response = await fetch('/data/skills.json');
                if(!response.ok){
                    throw new Error("Failed to fetch skills");
                }
                const data = await response.json();
                setSkills(data);
            }
            catch(err){
                console.error("error fetching skills",err);
                
            }
        };
        fetchSkills();
    },[]);
    const iconMap={
        FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaGitAlt: FaGitAlt,
  FaDatabase: FaDatabase,
  FaJava:FaJava,
  SiExpress:SiExpress,
  BiLogoMongodb :BiLogoMongodb,
  FaGithub :FaGithub ,
  SiAndroidstudio :SiAndroidstudio,
  FaLinux:FaLinux,
        FaAws :FaAws 
    };
  return (
    <section className='Services-section' id='services'>
        <h1 className="service-title">
            SERVICES
        </h1>
        <div className="service-item">
            <div>
            <CgWebsite className='icons' />
                <h2>Web Development</h2>
                <p>
                Building responsive, user-centric web applications using modern technologies like React, Node.js, Express, and MongoDB, ensuring seamless frontend and backend integration.
                <br /> Specializing in developing secure, scalable applications with dynamic UI and efficient API management.
                </p>
            </div>
            <div>
            <PiDesktopTowerDuotone className='icons'/>
                <h2>DesktopApp Development</h2>
                <p>
                Building efficient, user-friendly desktop applications using Java, Java Swing, and SQL, while managing backend operations to ensure seamless data processing and a dynamic user experience.
<br />Specializing in creating secure, high-performance applications with robust data management.
<br />Experienced in implementing encryption algorithms and CRUD operations to enhance functionality and security.
                </p>
            </div>
            <div>
            <BsAndroid2 className='icons'/>
                <h2>AndroidApp Development</h2>
                <p>
                Building intuitive, high-performance Android applications using Java and Android Studio, ensuring a smooth and dynamic user experience.
<br />Specializing in designing responsive UIs and integrating APIs for seamless functionality.
<br />Experienced in handling data persistence, implementing Firebase services, and managing user authentication effectively.
                </p>
            </div>
            <div>
            <FaGithub className='icons'/>
                <h2>Version Control</h2>
                <p>
                Managing code effectively using Git and GitHub to ensure smooth collaboration, version tracking, and seamless deployment.
                <br />Experienced in handling branches, resolving merge conflicts, and maintaining clean, organized repositories.
                </p>
            </div>
        </div>
        <div className="skill-container">
            <h1>Skills</h1>
            <div className="skill-grid">
                {
                    skills.map((skill,index)=>{
                        const IconComponent = iconMap[skill.icon];
                        return(
                            <div className="skill-card" key={index}>
                                {IconComponent && (
                                    <div className="skill-icon" style={{color:skill.color}}>
                                        <IconComponent/>

                                    </div>
                                )}
                                <span className='skill-name'>{skill.name}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    </section>
  )
}
