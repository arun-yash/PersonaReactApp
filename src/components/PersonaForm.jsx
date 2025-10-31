import React from 'react';

function PersonaForm({ personaData, onUpdate }) {
  const handleChange = (field, value) => {
    onUpdate({ ...personaData, [field]: value });
  };

  return (
    <div className="persona-form">
      <h2>Build Your Persona</h2>
      
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={personaData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="e.g., Kristin Watson"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          value={personaData.age}
          onChange={(e) => handleChange('age', e.target.value)}
          placeholder="e.g., 27"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role/Occupation</label>
        <input
          id="role"
          type="text"
          value={personaData.role}
          onChange={(e) => handleChange('role', e.target.value)}
          placeholder="e.g., Sales Manager"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={personaData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="e.g., Sydney"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          type="url"
          value={personaData.imageUrl}
          onChange={(e) => handleChange('imageUrl', e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={personaData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Write a short bio about this persona..."
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="goals">Goals (one per line)</label>
        <textarea
          id="goals"
          value={personaData.goals}
          onChange={(e) => handleChange('goals', e.target.value)}
          placeholder="List their core needs and goals..."
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="frustrations">Frustrations (one per line)</label>
        <textarea
          id="frustrations"
          value={personaData.frustrations}
          onChange={(e) => handleChange('frustrations', e.target.value)}
          placeholder="List their pain points and frustrations..."
          rows="4"
        />
      </div>
    </div>
  );
}

export default PersonaForm;

