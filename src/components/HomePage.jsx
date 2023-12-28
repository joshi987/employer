// import React, { useState } from "react";

// import "./HomePage.css";
// import Icon from "../img/icon2.png";
// import Icons from "../img/icon1.png";
// function HomePage() {
//   const [dashboardTitle, setDashboardTitle] = useState("");
//   const productivityData = [
//     { day: "Monday", percentage: 4 },
//     { day: "Tuesday", percentage: 92 },
//     { day: "Wednesday", percentage: 122 },
//     { day: "Thursday", percentage: 93 },
//     { day: "Friday", percentage: 89 },
//     { day: "Saturday", percentage: 98 },
//   ];

//   return (
//     <>
//       <div className="dashboard-container">
//         <input
//           className={`input-1 input-custom`}
//           type="text"
//           placeholder="Employee Productivity Dashboard"
//           value={dashboardTitle}
//           onChange={(e) => setDashboardTitle(e.target.value)}
//         />
//         <ul className="ul-1">
//           {productivityData.map((item, index) => (
//             <li className="li-1" key={index}>
//               <div
//                 className="div-1"
//                 style={{ "--percentage": `${item.percentage}%` }}
//               >
//                 <span>Productivity on {item.day}</span>
//                 <span className="span-1">{item.percentage}%</span>
//                 {index === 3 && <div></div>}{" "}
//                 {/* This div represents the background for the fourth list */}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="image-3">
//         <img src={Icon} alt="Right Image" className="img-1 right-image" />
//       </div>
//       <div className="img-5">
//         <img src={Icons} alt="Left Image" className="img-1 left-image" />
//       </div>
//     </>
//   );
// }

// export default HomePage;


// HomePage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Icon from '../img/icon2.png';
import Icons from '../img/icon1.png';
import Center from '../img/center.jpg'
import Call from '../img/call.jpg'

const HomePage = () => {
  const [dashboardTitle, setDashboardTitle] = useState('');
  const productivityData = [
    { day: 'Monday', percentage: 4 },
    { day: 'Tuesday', percentage: 92 },
    { day: 'Wednesday', percentage: 122 },
    { day: 'Thursday', percentage: 93 },
    { day: 'Friday', percentage: 89 },
    { day: 'Saturday', percentage: 98 },
  ];

  return (
    <>
    <div className='call'><img className='call-img' src={Call} alt="" /></div>
      <div className='center-img'><img className='center-img1' src={Center} alt="" /></div>
      <div className="dashboard-container">
        <input
          className={`input-1 input-custom`}
          type="text"
          placeholder="Employee Productivity Dashboard"
          value={dashboardTitle}
          onChange={(e) => setDashboardTitle(e.target.value)}
        />
        <ul className="ul-1">
          {productivityData.map((item, index) => (
            <li className="li-1" key={index}>
              <div
                className="div-1"
                style={{ "--percentage": `${item.percentage}%` }}
              >
                <span>Productivity on {item.day}</span>
                <span className="span-1">{item.percentage}%</span>
                {index === 3 && <div></div>}{' '}
                {/* This div represents the background for the fourth list */}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="image-3">
        <Link to="/profile">
          <img src={Icon} alt="Right Image" className="img-1 right-image" />
        </Link>
      </div>
      <div className="img-5">
        <Link to="/home">
          <img src={Icons} alt="Left Image" className="img-1 left-image" />
        </Link>
      </div>
    </>
  );
};

export default HomePage;
