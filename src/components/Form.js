import React from 'react'

export default function Form() {
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
        <form action="/action_page.php" className='info-form' >
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
            <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'70px', top:'40px'}}>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px', color:'#333'}}>Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" style={{ width:'400px', height:'50px', color:'black', fontSize:'20px'}}/>
            </div>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px',}}>Phone-Number</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone-Number" style={{ width:'400px', height:'50px', fontSize:'17px'}}/>
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
            <div className='form-input-field' style={{ position:'relative', top:'42px'}}>
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
            <div className='form-rows' style={{ display:'flex', justifyContent:'space-around', position:'relative', right:'70px', top:'40px'}}>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px', color:'#333'}}>Year Of Graduation</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Year of Graduation" style={{ width:'400px', height:'50px', color:'black', fontSize:'20px'}}/>
            </div>
            <div className='form-input-field'>
            <label for="exampleInputEmail1" style={{ position:'relative', top:'15px', left:'7px', fontSize:'20px',}}>Phone-Number</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone-Number" style={{ width:'400px', height:'50px', fontSize:'17px'}}/>
            </div>
            </div>
            </div>
            <input type="date" id="birthday" name="birthday"/>
  <input type="submit"></input>
        </form>
    </div>
    </div>
  )
}
