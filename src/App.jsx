import React, { useState } from 'react';
import PersonaForm from './components/PersonaForm';
import PersonaCard from './components/PersonaCard';
import PersonaJourney from './components/PersonaJourney';
import './App.css';

function App() {
  const [personaData, setPersonaData] = useState({
    name: 'Kristin Watson',
    age: '27',
    role: 'Sales Manager',
    location: 'Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'She currently lives in Sydney. She finished her master in business and has just been promoted to Sales Manager. She is currently single and likes to go out with friends on long holidays.',
    goals: 'Need to find people with similar skills that can help her tackle company goals.\nView all her hirings in an overview.\nThe price of the service is very important.',
    frustrations: 'Price is high related to quality they provide.\nCurrently finds perfect people from past work relations, family, friends and within my circle and online which is tedious.\nNot much choice and comparison not available.'
  });

  const [activeTab, setActiveTab] = useState('persona');

  return (
    <div className="app-container">
      <h1 className="app-title">✨ Persona Builder</h1>
      <div className="main-content">
        <PersonaForm 
          personaData={personaData} 
          onUpdate={setPersonaData} 
        />
        <div className="preview-section">
          <div className="tab-navigation">
            <button
              className={`tab-button ${activeTab === 'persona' ? 'active' : ''}`}
              onClick={() => setActiveTab('persona')}
            >
              <span className="tab-icon">👤</span>
              Persona Card
            </button>
            <button
              className={`tab-button ${activeTab === 'journey' ? 'active' : ''}`}
              onClick={() => setActiveTab('journey')}
            >
              <span className="tab-icon">🗺️</span>
              Persona Journey
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'persona' ? (
              <PersonaCard personaData={personaData} />
            ) : (
              <PersonaJourney personaData={personaData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

