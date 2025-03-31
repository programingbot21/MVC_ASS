import React from 'react';
import { useState } from "react";
import { FaHome, FaChartBar, FaUserFriends, FaCog } from "react-icons/fa";
import { Bot } from "lucide-react";
import { AiFillBell } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { AiFillThunderbolt } from "react-icons/ai";
import Dashboard1 from './Dashboard1';
import { Link } from 'react-router-dom';



// import Logout from '../Logout/Logout';
const Dashboard = () => {

    const [open, setOpen] = useState(true);
    return (
        
      <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
       <div className={`bg-blue-900 text-white p-5 transition-all ${open ? "w-64" : "w-20"}`}>
        <button onClick={() => setOpen(!open)} className="mb-5 focus:outline-none">
          {open ? "⬅" : "➡"}
        </button>
        <ul>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
            <FaHome /> {open && "Home"}
          </li>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
          <HiSpeakerphone />
 
          {open && "Campaigns"}
          </li>
          <Link to='/custtomer'>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
            <FaUserFriends /> {open && "Customers"}
          </li>
          </Link>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
          <AiFillBell />{open && "Follow Ups"}
          </li>
          <Link to='/inte'>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
          <AiFillThunderbolt />

          {open && "Integrations"}
          </li>
          </Link>
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
            <FaCog /> {open && "Settings"}
          </li>
          <Link to="/chatAi" >
          <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
          <Bot /> {open && "AI Suggestions"}
          </li></Link>
          {/* <li className="flex items-center gap-2 p-3 hover:bg-blue-700 rounded cursor-pointer">
            <Logout/>
          </li> */}
        </ul>
      </div>
      
      {/* Main Content */}
     <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard.</p>
      <Dashboard1/>
      </div>  
   </div>

    );
}

export default Dashboard;
