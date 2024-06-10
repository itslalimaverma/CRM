// src/components/Campaigns.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);

  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/campaigns'); 
      setCampaigns(response.data);
    } catch (err) {
      setError('Error fetching campaigns');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      {error && <p>{error}</p>}
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>{campaign.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Campaigns;
