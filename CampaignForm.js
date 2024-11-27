import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './CampaignForm.css';

function CampaignForm({ onSave }) {
  const [campaign, setCampaign] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: '',
  });

  const navigate = useNavigate();
  const location = useLocation(); // Get the campaign data when editing

  // Check if editing mode (when a campaign is passed from CampaignList)
  useEffect(() => {
    if (location.state && location.state.campaign) {
      setCampaign(location.state.campaign); // Pre-populate form fields
    }
  }, [location.state]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (both create and update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (campaign.id) {
        // Update existing campaign
        const response = await axios.put(`http://localhost:5000/campaigns/${campaign.id}`, campaign);
        console.log('Campaign updated:', response.data);
      } else {
        // Create new campaign
        const response = await axios.post('http://localhost:5000/campaigns', campaign);
        console.log('Campaign created:', response.data);
      }

      // If onSave is provided, call it with the saved campaign data
      if (onSave) {
        onSave(campaign);
      }

      // Navigate to the campaign list after saving
      navigate('/campaign-list');
    } catch (error) {
      console.error('Error saving campaign:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">{campaign.id ? 'Edit Campaign' : 'Create a New Campaign'}</h2>
      <form onSubmit={handleSubmit} className="campaign-form">
        <div className="form-group">
          <label htmlFor="name" style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }} >Campaign Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={campaign.name}
            onChange={handleChange}
            placeholder="Enter campaign name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }}>Description</label>
          <textarea
            id="description"
            name="description"
            value={campaign.description}
            onChange={handleChange}
            placeholder="Enter campaign description"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="startDate" style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }}>Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={campaign.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate" style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }}>End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={campaign.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget" style={{ color: '#333', fontSize: '16px', marginBottom: '5px' }}>Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={campaign.budget}
            onChange={handleChange}
            placeholder="Enter campaign budget"
            required
          />
        </div>

        <button type="submit" className="submit-button">{campaign.id ? 'Update Campaign' : 'Save Campaign'}</button>
      </form>

      <div className="image-container">
        <img
          src="https://www.matrixbricks.com/blog/wp-content/uploads/2017/11/digital-marketing.jpg"
          alt="Campaign visual"
          className="campaign-image"
        />
      </div>
    </div>
  );
}

export default CampaignForm;




























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; 
// import './CampaignForm.css';

// function CampaignForm({ onSave }) {
//   const [campaign, setCampaign] = useState({
//     name: '',
//     description: '',
//     startDate: '',
//     endDate: '',
//     budget: '',
//   });

//   const navigate = useNavigate();

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCampaign((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Post new campaign to the backend using Axios
//       const response = await axios.post('http://localhost:5000/campaigns', campaign);
//       console.log('Campaign saved:', response.data);

//       // If onSave is provided, call it with the saved campaign data
//       if (onSave) {
//         onSave(response.data);
//       }

//       // Navigate to the campaign list after saving
//       navigate('/campaign-list');
//     } catch (error) {
//       console.error('Error saving campaign:', error);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2 className="form-title">Create a New Campaign</h2>
//       <form onSubmit={handleSubmit} className="campaign-form">
//         <div className="form-group">
//           <label htmlFor="name">Campaign Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={campaign.name}
//             onChange={handleChange}
//             placeholder="Enter campaign name"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={campaign.description}
//             onChange={handleChange}
//             placeholder="Enter campaign description"
//             rows="4"
//           ></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="startDate">Start Date</label>
//           <input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={campaign.startDate}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="endDate">End Date</label>
//           <input
//             type="date"
//             id="endDate"
//             name="endDate"
//             value={campaign.endDate}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="budget">Budget</label>
//           <input
//             type="number"
//             id="budget"
//             name="budget"
//             value={campaign.budget}
//             onChange={handleChange}
//             placeholder="Enter campaign budget"
//             required
//           />
//         </div>

//         <button type="submit" className="submit-button">Save Campaign</button>
//       </form>

//       <div className="image-container">
//         <img
//           src="https://www.matrixbricks.com/blog/wp-content/uploads/2017/11/digital-marketing.jpg"
//           alt="Campaign visual"
//           className="campaign-image"
//         />
//       </div>
//     </div>
//   );
// }

// export default CampaignForm;
