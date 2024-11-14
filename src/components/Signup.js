import React from 'react'
import { Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div>
         <section className="signup">
            <div className="signup_container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group" style={{ }}>
                                <span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>person</span>
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" style={{ paddingLeft:'35px'}}/>
                            </div>
                            <div className="form-group" style={{ position:'relative', bottom:'35px'}}>
                            <span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>email</span>
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" style={{ paddingLeft:'35px'}}/>
                            </div>
                            <div className="form-group" style={{ position:'relative', bottom:'70px'}}><span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>Lock</span>
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" style={{ paddingLeft:'35px'}}/>
                            </div>
                            <div className="form-group" style={{ position:'relative', bottom:'105px'}}><span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>lock_open</span>
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" style={{ paddingLeft:'35px'}}/>
                            </div>
                            <div className="form-group"  style={{ position:'relative', bottom:'100px'}}>
                            <select class="form-control">
                                                <option class="hidden" selected disabled>Select Your Role </option>
                                                <option>College Admin</option>
                                                <option>Recrutier</option>
                                                <option>Student/Scholar</option>
                                            </select>
                            </div>
                            <div>
                              <button className='login-button' style={{ position:'relative', bottom:'90px'}}>Create Account</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={require('./images/signup-image.jpg')} alt="sing up image"/></figure>
                        <div className='other_option'><p style={{ fontSize:'17px', color:'#333'}}>Already Have An Account ? </p><Link to="/Login" className="signup-image-link">Login</Link></div>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}
