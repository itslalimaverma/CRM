// client/src/components/Audience.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Audience.css";

const Audience = () => {
  const [name, setName] = useState('');
  const [totalSpends, setTotalSpends] = useState('');
  const [maxVisits, setMaxVisits] = useState('');
  const [notVisitedSince, setNotVisitedSince] = useState('');
  const [audienceSize, setAudienceSize] = useState(null);

  const handleCreateAudience = async (e) => {
    e.preventDefault();
    const criteria = {};
    if (totalSpends) criteria.totalSpends = parseFloat(totalSpends);
    if (maxVisits) criteria.maxVisits = parseInt(maxVisits, 10);
    if (notVisitedSince) criteria.notVisitedSince = parseInt(notVisitedSince, 10);

    const response = await axios.post('/api/campaigns', { name, audienceCriteria: criteria });
    console.log(response.data);
  };

  const handleCheckAudienceSize = async () => {
    const criteria = {};
    if (totalSpends) criteria.totalSpends = parseFloat(totalSpends);
    if (maxVisits) criteria.maxVisits = parseInt(maxVisits, 10);
    if (notVisitedSince) criteria.notVisitedSince = parseInt(notVisitedSince, 10);

    const response = await axios.post('/api/customers/audience-size', criteria);
    setAudienceSize(response.data.size);
  };

  return (
    <div className="audience-container">
      <h1>Create Audience</h1>
      <form onSubmit={handleCreateAudience}>
        <input type="text" placeholder="Campaign Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Total Spends >" value={totalSpends} onChange={(e) => setTotalSpends(e.target.value)} />
        <input type="number" placeholder="Max Visits" value={maxVisits} onChange={(e) => setMaxVisits(e.target.value)} />
        <input type="number" placeholder="Not Visited in Last Months" value={notVisitedSince} onChange={(e) => setNotVisitedSince(e.target.value)} />
        <div className="buttons">
          <button type="button" onClick={handleCheckAudienceSize}>Check Audience Size</button>
          <button type="submit">Create Audience</button>
        </div>
      </form>
      {audienceSize !== null && <p>Audience Size: {audienceSize}</p>}
    </div>
  );
};

export default Audience;
