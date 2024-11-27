import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './project/Home';
import CampaignForm from './project/CampaignForm';
import CampaignList from './project/CampaignList';
import Services from './project/Services';
import ContactUs from './project/ContactUs';
import Login from './project/Login'; 
import SignUp from './project/SignUp'; 
import './App.css';

function App() {
  // eslint-disable-next-line
  const [campaigns, setCampaigns] = useState([]); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null); 

  const handleSaveCampaign = (campaign) => {
    if (editingCampaign) {
      setCampaigns((prevCampaigns) =>
        prevCampaigns.map((prevCampaign) =>
          prevCampaign.id === editingCampaign.id ? { ...campaign, id: editingCampaign.id } : prevCampaign
        )
      );
    } else {
      setCampaigns((prevCampaigns) => [
        ...prevCampaigns,
        { ...campaign, id: prevCampaigns.length + 1 },
      ]);
    }
    clearEditingCampaign(); 
  };

  const handleEditCampaign = (campaign) => {
    setEditingCampaign(campaign);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    clearEditingCampaign(); 
  };

  const clearEditingCampaign = () => {
    setEditingCampaign(null); 
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            {isAuthenticated && (
              <>
                <li><Link to="/campaign-form" onClick={clearEditingCampaign}>Create Campaign</Link></li>
                <li><Link to="/campaign-list">View Campaigns</Link></li>
              </>
            )}
            {!isAuthenticated && (
              <li><Link to="/login">Login</Link></li>
            )}
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            {isAuthenticated && (
              <li>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/campaign-form" element={<CampaignForm onSave={handleSaveCampaign} existingCampaign={editingCampaign} />} />
          <Route path="/campaign-list" element={<CampaignList onEdit={handleEditCampaign} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/campaign-list" element={<CampaignList />} />
        <Route path="/edit-campaign" element={<CampaignForm />} />
        <Route path="/create-campaign" element={<CampaignForm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
































// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'; 
// import Home from './project/Home';
// import CampaignForm from './project/CampaignForm';
// import CampaignList from './project/CampaignList';
// import Services from './project/Services';
// import ContactUs from './project/ContactUs';
// import Login from './project/Login'; 
// import SignUp from './project/SignUp'; 
// import './App.css';
// function App() {
//   const [campaigns, setCampaigns] = useState([]); // State to hold the list of campaigns
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

//   // Function to handle saving a new campaign
//   const handleSaveCampaign = (campaign) => {
//     setCampaigns((prevCampaigns) => [
//       ...prevCampaigns,
//       { ...campaign, id: prevCampaigns.length + 1 }, // Assign a unique ID
//     ]);
//   };

//   // Function to handle login
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   // Function to handle logout
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul className="nav-links">
//             <li><Link to="/">Home</Link></li>
//             {isAuthenticated && (
//               <>
//                 <li><Link to="/campaign-form">Create Campaign</Link></li>
//                 <li><Link to="/campaign-list">View Campaigns</Link></li>
//               </>
//             )}
//             {!isAuthenticated && (
//               <li><Link to="/login">Login</Link></li>
//             )}
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/contact-us">Contact Us</Link></li>
//             {isAuthenticated && (
//             <>
//               <li>
//                 <button className="logout-button" onClick={handleLogout}>Logout</button>
//               </li>
//             </>
//             )}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/signup" element={<SignUp />} /> 
//           <Route path="/campaign-form" element={isAuthenticated ? <CampaignForm onSave={handleSaveCampaign} /> : <Navigate to="/login" />} />
//           <Route path="/campaign-list" element={isAuthenticated ? <CampaignList campaigns={campaigns} /> : <Navigate to="/login" />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
