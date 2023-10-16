import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    // localStorage.removeitem("accessToken")
    Navigate("/")
  };
    const navItems=<>
<li><Link className='text-gray-600 hover:text-blue-600' to="/">Home</Link></li>
      <li><Link className='text-gray-600 hover:text-blue-600' to="/service">Services</Link></li>
      <li><Link className='text-gray-600 hover:text-blue-600' to="/about">About</Link></li>
      <li><Link className='text-gray-600 hover:text-blue-600' to="/contact">Contact Us</Link></li>
      <li>{user ? <button className="rounded-xl mt-[-3px] border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white" onClick={logout} >Sign Out</button> : <Link className='class="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"' to="/login">Login</Link>}</li>
    </>
    return (
        <div>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Glow-Photography</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>  
        </div>
    );
}

export default Navbar;
