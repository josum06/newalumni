import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="content">
            <div className="form-group">
              <label>Full name</label>
              <input type="text" value="Tanmay Gupta" readOnly />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="text" value="DD/MM/YY" readOnly />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input type="text" value="Male" readOnly />
            </div>
            <div className="form-group">
              <label>Batch</label>
              <input type="text" value="Batch(YYYY-YYYY)" readOnly />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" value="Branch Name" readOnly />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input type="text" value="XXXXXXXXXX" readOnly />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" value="abc@xyz.com" readOnly />
            </div>
            <div className="form-group">
              <label>Current Address</label>
              <input type="text" value="" readOnly />
            </div>
          </div>
        );
      case 'educational':
        return (
          <div className="content">
            <div className="form-group">
              <label>College</label>
              <input type="text" value="BPIT" readOnly />
            </div>
            <div className="form-group">
              <label>Degree</label>
              <input type="text" value="B.Tech" readOnly />
            </div>
            <div className="form-group">
              <label>Major/Field Of Study</label>
              <input type="text" value="Computer Science" readOnly />
            </div>
            <div className="form-group">
              <label>Graduation Year</label>
              <input type="text" value="YYYY" readOnly />
            </div>
            <div className="form-group">
              <label>GPA</label>
              <input type="text" value="XXXX" readOnly />
            </div>
            <div className="form-group">
              <label>Relevant Projects or Research</label>
              <input type="text" value="" readOnly />
            </div>
          </div>
        );
      case 'professional':
        return <div className="content">Professional Information Content</div>;
      case 'achievements':
        return <div className="content">Achievements Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="profile">
        <img src="profileimage.jpg" alt="Profile" className="profile-img" />
        <h3>Tanmay Gupta</h3>
        <p>Enroll No. 123456789xxx</p>
      </div>
      <div className="content-wrapper">
        <div className="tabs">
          <div className={`tab ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>Personal Information</div>
          <div className={`tab ${activeTab === 'educational' ? 'active' : ''}`} onClick={() => setActiveTab('educational')}>Educational Background</div>
          <div className={`tab ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')}>Professional Information</div>
          <div className={`tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>Achievements</div>
        </div>
        <div className="content-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
