import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser,setUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;   
        const photo = form.photo.value;

        createUser(email,password)
        .then(res=>{
            const user = res.user;
            updateUser({
                displayName: name,
                photoURL: photo
            }).then(() => {
                 setUser({...user,displayName: name,photoURL: photo})
            }).catch((error) => {
                console.log(error)
                setUser(user);
            });
            navigate("/");
           
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className='flex justify-center items-center min-h-screen'> 
        
                     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                        <h2 className='font-semibold text-2xl text-center '>
                            Register Your Account
                        </h2>
                        <form onSubmit={handleRegister}>
                             <div className="card-body">
                <fieldset className="fieldset">
                {/* Name */}
                <label className="label font-semibold text-[15px]">Name</label>
                  <input required name='name' type="text" className="input" placeholder="Name" />
                  {/* Photo URL */}
                  <label className="label font-semibold text-[15px]">Photo URL</label>
                  <input required name='photo' type="text" className="input" placeholder="Photo URL" />
                {/* Email */}
                  <label className="label font-semibold text-[15px]">Email Address</label>
                  <input required name='email' type="email" className="input" placeholder="Email" />
                  {/* Password */}
                  <label className="label font-semibold text-[15px]">Password</label>
                  <input required name='password' type="password" className="input" placeholder="Password" />
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
        
                
                  <p className='font-semibold text-[15px] text-center pt-2'>Already have An Account ? <span className='text-red-500'><Link to={"/auth/login"}>Login</Link></span></p>
                </fieldset>
              </div>
                        </form>
             
            </div>
                </div>
    );
};

export default Register;