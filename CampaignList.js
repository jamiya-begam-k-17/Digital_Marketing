import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; 
import './CampaignList.css'; 

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]); // State for storing campaign data
  const navigate = useNavigate(); // Hook for navigation

  // Fetch campaigns on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/campaigns')
      .then((response) => {
        setCampaigns(response.data); // Set campaigns in state
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error); // Log any errors
      });
  }, []);

  // Handle campaign edit
  const handleEdit = (campaign) => {
    // Navigate to the CampaignForm with the selected campaign data
    navigate('/edit-campaign', { state: { campaign } });
  };

  // Handle campaign delete
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/campaigns/${id}`)
      .then(() => {
        // Filter out the deleted campaign from the list
        setCampaigns(campaigns.filter(campaign => campaign.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting campaign:', error);
      });
  };

  return (
    <div className="campaign-list">
      <h2 className="campaign-list__title">Campaign List</h2>
      {campaigns.length > 0 ? (
        <ul className="campaign-list__items">
          {campaigns.map((campaign) => (
            <li key={campaign.id} className="campaign-list__item">
              <div className="campaign-list__name">{campaign.name}</div>
              <p className="campaign-list__description">{campaign.description}</p>
              <button onClick={() => handleEdit(campaign)}>Edit</button>
              <button onClick={() => handleDelete(campaign.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="campaign-list__no-campaigns">No campaigns available.</p>
      )}
    </div>
  );
}

export default CampaignList;


























// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // For navigation
// import axios from 'axios'; 
// import './CampaignList.css'; 

// function CampaignList() {
//   const [campaigns, setCampaigns] = useState([]);
//   const navigate = useNavigate(); // Hook for navigation

//   useEffect(() => {
//     axios.get('http://localhost:5000/campaigns')
//       .then((response) => {
//         setCampaigns(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching campaigns:', error);
//       });
//   }, []);

//   const handleEdit = (campaign) => {
//     // Navigate to CampaignForm, passing the selected campaign data
//     navigate('/edit-campaign', { state: { campaign } });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/campaigns/${id}`)
//       .then(() => {
//         setCampaigns(campaigns.filter(campaign => campaign.id !== id));
//       })
//       .catch((error) => {
//         console.error('Error deleting campaign:', error);
//       });
//   };

//   return (
//     <div className="campaign-list">
//       <h2 className="campaign-list__title">Campaign List</h2>
//       {campaigns.length > 0 ? (
//         <ul className="campaign-list__items">
//           {campaigns.map((campaign) => (
//             <li key={campaign.id} className="campaign-list__item">
//               <div className="campaign-list__name">{campaign.name}</div>
//               <p className="campaign-list__description">{campaign.description}</p>
//               <button onClick={() => handleEdit(campaign)}>Edit</button>
//               <button onClick={() => handleDelete(campaign.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="campaign-list__no-campaigns">No campaigns available.</p>
//       )}
//     </div>
//   );
// }

// export default CampaignList;
