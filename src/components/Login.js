import React from 'react'
import { Link} from 'react-router-dom'
export default function Login() {
  return (
    <div>
      <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={require('./images/signin-image.jpg')} alt="sing up image"/></figure>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>person</span>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name" style={{paddingLeft:'35px'}}/>
                            </div>
                            <div className="form-group"  style={{ position:'relative', bottom:'40px'}}>
                            <span class="material-symbols-outlined"  style={{ position:'relative', top:'45px'}}>lock</span>
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" style={{paddingLeft:'35px'}}/>
                            </div>
                            <div>
                              <button className='login-button'>Log In</button>
                            </div>
                        </form>
                        <div>
                            <div className='other_option'><p style={{ fontSize:'17px', color:'#333'}}>Didn't Have An Account ? </p><Link to="/Signup" className="signup-image-link">Create One</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
