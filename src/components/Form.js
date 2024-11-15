import React, { useState } from 'react';
export default function Form() {

  
    // Initialize state for the date of birth
    const [dob, setDob] = useState('2017-06-01');
    const [graduationMonth, setGraduationMonth] = useState('2000-01');
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); // New state for project modal
    const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false); // New state for experience modal
    const [selectedDomain, setSelectedDomain] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [skills, setSkills] = useState([]); // State to hold submitted skills
    const [experienceTitle, setExperienceTitle] = useState(''); // State for experience title
    const [experienceName, setExperienceName] = useState(''); // State for experience name
    const [fatherName, setFatherName] = useState('');
    const [experiences, setExperiences] = useState([]); // State to hold submitted experiences
    const [projectName, setProjectName] = useState('');
    const [deploymentLink, setDeploymentLink] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projects, setProjects] = useState([]); // State to hold submitted projects

    // Function to handle date change
    const handleDateChange = (event) => {
        setDob(event.target.value); // Update state with the new date
    };

    const handleMonthChange = (event) => {
      setGraduationMonth(event.target.value); // Update state with the new month
  };

  const handleSubmitSkill = () => {
    // Add the new skill to the skills array
    if (selectedDomain && additionalInfo) {
        const newSkill = {
            domain: selectedDomain,
            info: additionalInfo,
        };
        setSkills([...skills, newSkill]); // Update skills state
        handleCloseModal(); // Close the modal after submission
        setSelectedDomain(''); // Reset domain selection
        setAdditionalInfo(''); // Reset additional info
    } else {
        alert("Please fill in all fields."); // Alert if fields are empty
    }
};

const handleTextareaChange = (event) => {
    setAdditionalInfo(event.target.value);
};

const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
};

// const handleworktypeChange = (event) => {
//     setSelectedworktype(event.target.value);
// };

const handleAddSkillClick = () => {
    setIsModalOpen(true); // Open the modal
};

const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
};

const handleAddExperienceClick = () => {
    setIsExperienceModalOpen(true); // Open the experience modal
};

const handleCloseExperienceModal = () => {
    setIsExperienceModalOpen(false); // Close the experience modal
};

const handleSubmitExperience = () => {
    if (experienceTitle && experienceName && fatherName) {
        const newExperience = {
            title: experienceTitle,
            name: experienceName,
            fatherName: fatherName,
        };
        setExperiences([...experiences, newExperience]); // Add the new experience to the array
        handleCloseExperienceModal(); // Close the modal after submission
        setExperienceTitle(''); // Reset title
        setExperienceName(''); // Reset name
        setFatherName(''); // Reset father name
    } else {
        alert("Please fill in all fields."); // Alert if fields are empty
    }
};

const handleDeleteSkill = (index) => {
    // Remove the skill at the specified index
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills); // Update the skills state
};

const handleDeleteExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences); // Update the experiences state
};

const handleAddProjectClick = () => {
    setIsProjectModalOpen(true); // Open the project modal
};

const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false); // Close the project modal
};

const handleDeleteProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects); // Update the projects state
};

const handleSubmitProject = () => {
    if (projectName && deploymentLink && projectDescription) {
        const newProject = {
            name: projectName,
            link: deploymentLink,
            description: projectDescription,
        };
        setProjects([...projects, newProject]); // Add the new project to the projects array
        handleCloseProjectModal(); // Close the modal after submission
        setProjectName(''); // Reset project name
        setDeploymentLink(''); // Reset deployment link
        setProjectDescription(''); // Reset project description
    } else {
        alert("Please fill in all fields."); // Alert if fields are empty
    }
};
  
  return (
    <div className='main'>
    <div className='main_container'>
        <div className='img_box'>
            <div style={{ position:'relative', top:'400px', left:'50px'}}>
            <h1>Registration Form</h1>
            <p style={{ fontSize:'17px', color:'#333', position:'relative', bottom:'10px', left:'5px'}}>Please Fill in the details</p>
            </div>
            {/* <img src={require('./images/logo-img.png')} style={{ width:"100%", height:'550px'}}/> */}
        </div>
        <form className='info-form' >
            <div className='form-column' style={{ position:'relative', top:'40px'}}>
            <h3 style={{ position:'relative', left:'85px', display:'flex', gap:'10px'}}><h3 id='underline'>Personal</h3>Details</h3>
            <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'70px', top:'20px'}}>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px', color:'#333'}}>Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your FullName" style={{ width:'400px', height:'50px', color:'black', fontSize:'20px'}}/>
            </div>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px',}}>Phone-Number</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone-Number" style={{ width:'400px', height:'50px', fontSize:'17px'}}/>
            </div>
            </div>
            <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'124px', top:'40px'}}>
            <div className='form-input-field' style={{ position:'relative', left:'32px'}}>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px', color:'#333'}}>Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" style={{ width:'400px', height:'50px', color:'black', fontSize:'20px'}}/>
            </div>
            <div style={{ display:'flex', position:'relative', left:'100px'}}>
            <div className='form-input-field' style={{ position: 'relative', right: '110px' }}>
            <label htmlFor="exampleInputEmail1" style={{ position: 'relative', top: '15px', left: '7px', fontSize: '20px' }}>
                Date Of Birth
            </label>
            <input 
                type="date" 
                value={dob} // Bind the input value to state
                onChange={handleDateChange} // Set up the change handler
                style={{ width: '180px', fontSize: '18px', border: '1px solid black', borderRadius: '5px' }} 
            />
        </div>
        <div className='form-input-field' style={{ position:'relative', top:'42px', right:'23px'}}>
            <select class="form-select" aria-label="Default select example" style={{ width:'130px', height:'50px', color:'black', fontSize:'20px',cursor:'pointer',borderRadius:'5px',textAlign:'center'}}>
            <option class="hidden" selected disabled>Gender </option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Trans-Gender</option>

</select>
            </div>
            </div>
            </div>
            </div>
            <div className='form-column' style={{ position:'relative', top:'120px'}}>
        <h3 style={{ position:'relative', left:'85px', display:'flex', gap:'10px'}}><h3 id='underline'>Educational</h3>Details</h3>
          <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'70px', top:'20px'}}>
            <div className='form-input-field' style={{ position:'relative', left:'35px'}}>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px', color:'#333'}}>Institute Name</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Institute
             Name" style={{ width:'400px', height:'50px', color:'black', fontSize:'20px'}}/>
            </div>
            <div className='form-input-field' style={{ position:'relative', top:'42px', left:'125px'}}>
            <select class="form-select" aria-label="Default select example" style={{ width:'130px', height:'50px', color:'black', fontSize:'20px',cursor:'pointer',borderRadius:'5px',textAlign:'center'}}>
            <option class="hidden" selected disabled>Degree </option>
  <option value="1">Bachelor's</option>
  <option value="2">Master's</option>
</select>
            </div>
            <div className='form-input-field' style={{ position:'relative', top:'42px', right:'34px'}}>
            <select class="form-select" aria-label="Default select example" style={{ width:'210px', height:'50px', color:'black', fontSize:'20px', textAlign:'center', cursor:'pointer',borderRadius:'5px'}}>
            <option class="hidden" selected disabled>Branch</option>
  <option value="1">Computer Science</option>
  <option value="2">Information Technology</option>
  <option value="3">Electrical</option>
  <option value="4">Electronics</option>
  <option value="">Mechanical</option>
  <option value="3">Civil</option>
</select>
            </div>
            </div>
            <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'20px', top:'40px'}}>
            <div className='form-input-field' style={{ position: 'relative', right: '110px' }}>
            <label htmlFor="bday-month" style={{ position: 'relative', top: '15px', left: '7px', fontSize: '20px' }}>
                Year Of Graduation
            </label>
            <input 
                type="month" 
                name="bday-month" 
                value={graduationMonth} // Bind the input value to state
                onChange={handleMonthChange} // Set up the change handler
                style={{ width: '180px', fontSize: '18px', border: '1px solid black', borderRadius: '5px', paddingRight:"10px" }} 
            />
        </div>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px',}}>Phone-Number</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone-Number" style={{ width:'400px', height:'50px', fontSize:'17px'}}/>
            </div>
            </div>
            </div>
            <div className='form-column' style={{ position:'relative', top:'190px'}}>
            <h3 style={{ position:'relative', left:'85px', display:'flex', gap:'10px'}}><h3 id='underline'>Add Diffrent</h3>Skills</h3>
           
           <button type='button' id='skill'  onClick={handleAddSkillClick}>Add Skill<i class="fa-solid fa-plus" style={{ position:'relative', left:"10px", fontSize:"15px", bottom:"0px", backgroundColor:'#fff', color:'#1492e0', borderRadius:'50%', width:'17px', height:'17px', alignContent:'center'}}></i></button>
           
            </div>
            <div className='form-column' style={{ position:'relative', top:'220px'}}>
            <h3 style={{ position:'relative', left:'85px', display:'flex', gap:'10px'}}><h3 id='underline'>Add </h3>Work Experiences</h3>
           
           <button onClick={handleAddExperienceClick} type='button' id='skill' style={{ width:'170px'}}>Add Experience<i class="fa-solid fa-plus" style={{ position:'relative', left:"10px", fontSize:"15px", bottom:"0px", backgroundColor:'#fff', color:'#1492e0', borderRadius:'50%', width:'17px', height:'17px', alignContent:'center'}}></i></button>
           
            </div>
            <div className='form-column' style={{ position:'relative', top:'110px', left:'700px'}}>
            <h3 style={{ position:'relative', left:'85px', display:'flex', gap:'10px'}}><h3 id='underline'>Add Your </h3>Projects</h3>
           
           <button onClick={handleAddProjectClick}  type='button' id='skill' style={{ width:'170px'}}>Add Projects<i class="fa-solid fa-plus" style={{ position:'relative', left:"10px", fontSize:"15px", bottom:"0px", backgroundColor:'#fff', color:'#1492e0', borderRadius:'50%', width:'17px', height:'17px', alignContent:'center'}}></i></button>
           
            </div>
            <div className='form-column' style={{ position:'relative', top:'300px', left:"60px"}}>
                <div className="upload-resume">
                     <h3 style={{ position:'relative', left:'30px', display:'flex', gap:'10px'}}><h3 id='underline'>Upload </h3>Your Resume</h3>
                    <input type="file" id="file" name="file" style={{ border:"none",  width:'250px'}}/>
                    <button style={{ position:'relative', top:"80px", left:'1150px'}}>Submit details</button>
                </div>
            </div>

           

            
        </form>

        {isProjectModalOpen && (
                    <div className="modal">
                        <div className="modal-content" style={{ height:'400px'}}>
                            <span className="close" onClick={handleCloseProjectModal}>&times;</span>
                            <h2>Add Project</h2>
                            <input 
                                id="projectName" 
                                value={projectName} 
                                onChange={(e) => setProjectName(e.target.value)} 
                                placeholder="Project Name" 
                                style={{ fontSize:"17px"}} 
                            />
                            <br />
                            <input 
                                id="deploymentLink" 
                                value={deploymentLink} 
                                onChange={(e) => setDeploymentLink(e.target.value)} 
                                placeholder="Deployment Link" 
                                style={{ fontSize:"17px"}} 
                            />
                            <br />
                            <textarea 
                                id="projectDescription" 
                                value={projectDescription} 
                                onChange={(e) => setProjectDescription(e.target.value)} 
                                placeholder="Description" 
                                style={{ fontSize:"17px"}} 
                            />
                            <button onClick={handleSubmitProject}>Submit</button>
                            </div>
                            </div>
        )}

        {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content" style={{ height:'350px'}}>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>Add Skill</h2>
                            <select id="domain" value={selectedDomain} onChange={handleDomainChange}>
                                <option value="" disabled>Select Domain</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Mechanical">Mechanical</option>
                            </select>
                            <br />
                            <label htmlFor="additionalInfo" style={{ fontSize:'18px', marginTop:'10px', marginLeft:'23px'}}>Skills</label>
                            <input id="additionalInfo" value={additionalInfo} onChange={handleTextareaChange} rows="3" cols="50" placeholder="Enter the Skill..." style={{ position:'relative', top:'5px', paddingTop:'10px', border:'1px solid #333', borderRadius:'5px', fontSize:'16px', textTransform:'uppercase'}}></input>
                            <br />
                            <button onClick={handleSubmitSkill}>Submit</button>
                        </div>
                    </div>
                )}


{isExperienceModalOpen && (
                    <div className="modal">
                        <div className="modal-content" style={{ height:'400px'}}>
                            <span className="close" onClick={handleCloseExperienceModal}>&times;</span>
                            <h2>Add Experience</h2>
                            <input id="experienceTitle" value={experienceTitle} onChange={(e) => setExperienceTitle(e.target.value)} placeholder="Title" style={{ fontSize:"17px"}}/>
                            <br />
                            <input id="experienceName" value={experienceName} onChange={(e) => setExperienceName(e.target.value)} placeholder="Employment Type" style={{ fontSize:"17px"}}/>
                            <br />
                            <input id="fatherName" value={fatherName} onChange={(e) => setFatherName(e.target.value)} placeholder="Company Name" style={{ fontSize:"17px"}}/>
                            <br />
                            <button onClick={handleSubmitExperience}>Submit</button>
                        </div>
                    </div>
                )}

<div className='skills-list' style={{position:'relative', left:'250px', bottom:'208px' }}>
                    <div style={{ display:'flex', gap:'10px'}}>
                        {skills.map((skill, index) => (
                            <div id='skill-container' key={index} style={{ height:'40px', borderRadius:'5px', textAlign:'center', fontSize:'18px', textTransform:'uppercase', border:'1px solid #333', paddingTop:'3px'}}>
                                {skill.info}
                                <span onClick={() => handleDeleteSkill(index)} style={{color: 'red', cursor:'pointer'}}>
                                    &times; {/* This is the close/cut symbol */}
                                </span>
                            </div>
                            
                        ))}
                    </div>
                </div>

                
                 {/* Displaying submitted experiences */}
                 <div className='experiences-list' style={{ position: 'relative', bottom: '45px', left: '80px', display:"flex", gap:'30px',  width:"500px" }}>
                        {experiences.map((experience, index) => (
                            <div id='experience-container' key={index} style={{ border: '1px solid #333', borderRadius: '5px', padding: '10px', marginBottom: '10px'}}>
                                <div style={{ display:'flex', gap:'20px'}}><h4>{experience.title}</h4> <span onClick={() => handleDeleteExperience(index)} style={{ color: 'red', cursor: 'pointer', position:"relative", bottom:'6px', fontSize:'25px' }}>&times;</span></div>
                                <p><strong>Employment Type:</strong> {experience.name}</p>
                                <p><strong>Company's Name:</strong> {experience.fatherName}</p>
                            </div>
                        ))}
                        </div>

{/* Displaying submitted projects */}
<div className='projects-list' style={{ position: 'relative', bottom: '180px', left: '780px', display:"flex", gap:'30px',  width:"500px" }}>
    {projects.map((project, index) => (
        <div id='project-container' key={index} style={{ border: '1px solid #333', borderRadius: '5px', padding: '10px', marginBottom: '10px'}}>
           <div style={{ display:'flex', gap:'20px'}}> <h4>{project.name}</h4> <span onClick={() => handleDeleteProject(index)} style={{ color: 'red', cursor: 'pointer', fontSize: '20px', position:"relative", bottom:"10px" }}>&times;</span></div>
            <p><strong>Deployment Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            <p><strong>Description:</strong> {project.description}</p>
        </div>
    ))}
</div>


    </div>
    
    </div>

    
  )
}
