import React from 'react';

function PersonaCard({ personaData }) {
  const { name, age, role, location, imageUrl, bio, goals, frustrations } = personaData;
  
  // Parse goals and frustrations (split by newlines and filter empty lines)
  const goalsList = goals
    .split('\n')
    .map(g => g.trim())
    .filter(g => g.length > 0);
  
  const frustrationsList = frustrations
    .split('\n')
    .map(f => f.trim())
    .filter(f => f.length > 0);

  // Check if persona has any data
  const hasData = name || age || role || location || bio || goalsList.length > 0 || frustrationsList.length > 0;

  if (!hasData) {
    return (
      <div className="persona-card-wrapper">
        <div className="persona-card">
          <div className="empty-state">
            <div className="empty-state-icon">👤</div>
            <h3 className="empty-state-title">Start Building</h3>
            <p className="empty-state-text">
              Fill out the form on the left to see your persona card come to life!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Get initials for avatar fallback
  const getInitials = (name) => {
    if (!name) return '?';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <div className="persona-card-wrapper">
      <div className="persona-card">
        <div className="profile-section">
          <h1 className="profile-name">{name || 'Your Persona'}</h1>
          
          <div className="profile-image">
            {imageUrl ? (
              <img src={imageUrl} alt={name} onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.textContent = getInitials(name);
              }} />
            ) : (
              getInitials(name)
            )}
          </div>

          <div className="profile-details">
            {age && (
              <div className="detail-row">
                <span className="detail-label">Age</span>
                <span className="detail-value">{age}</span>
              </div>
            )}
            {role && (
              <div className="detail-row">
                <span className="detail-label">Occupation</span>
                <span className="detail-value">{role}</span>
              </div>
            )}
            {location && (
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span className="detail-value">{location}</span>
              </div>
            )}
          </div>
        </div>

        {bio && (
          <div className="info-section">
            <h3 className="section-title">Bio</h3>
            <p className="section-content">{bio}</p>
          </div>
        )}

        {goalsList.length > 0 && (
          <div className="info-section">
            <h3 className="section-title">Core Needs & Goals</h3>
            <ul className="section-list">
              {goalsList.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        )}

        {frustrationsList.length > 0 && (
          <div className="info-section">
            <h3 className="section-title">Frustrations</h3>
            <ul className="section-list">
              {frustrationsList.map((frustration, index) => (
                <li key={index}>{frustration}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonaCard;

