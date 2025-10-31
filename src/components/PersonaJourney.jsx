import React from 'react';

function PersonaJourney({ personaData }) {
  const { name, role, goals, frustrations } = personaData;

  // Generate journey stages based on persona data
  const generateJourneyStages = () => {
    const hasGoals = goals && goals.trim().length > 0;
    const hasFrustrations = frustrations && frustrations.trim().length > 0;

    if (!hasGoals && !hasFrustrations) {
      return [
        {
          stage: 'Awareness',
          emotion: 'curious',
          emotionLevel: 3,
          thinking: 'What options are available?',
          doing: 'Researching online, asking friends',
          feeling: 'Curious and hopeful'
        },
        {
          stage: 'Consideration',
          emotion: 'interested',
          emotionLevel: 4,
          thinking: 'Which solution fits my needs?',
          doing: 'Comparing options, reading reviews',
          feeling: 'Engaged but uncertain'
        },
        {
          stage: 'Decision',
          emotion: 'anxious',
          emotionLevel: 2,
          thinking: 'Is this the right choice?',
          doing: 'Evaluating pros and cons',
          feeling: 'Anxious about commitment'
        },
        {
          stage: 'Experience',
          emotion: 'satisfied',
          emotionLevel: 4,
          thinking: 'This meets my expectations',
          doing: 'Using the product/service',
          feeling: 'Satisfied and relieved'
        }
      ];
    }

    // Generate contextual journey based on goals and frustrations
    const goalsList = hasGoals ? goals.split('\n').filter(g => g.trim()) : [];
    const frustrationsList = hasFrustrations ? frustrations.split('\n').filter(f => f.trim()) : [];

    return [
      {
        stage: 'Awareness',
        emotion: 'curious',
        emotionLevel: 3,
        thinking: hasGoals && goalsList[0] ? `"I need to ${goalsList[0].toLowerCase()}"` : 'What solutions exist for my problem?',
        doing: 'Searching online, asking colleagues for recommendations',
        feeling: 'Curious but slightly overwhelmed'
      },
      {
        stage: 'Research',
        emotion: hasFrustrations ? 'frustrated' : 'interested',
        emotionLevel: hasFrustrations ? 2 : 4,
        thinking: hasFrustrations && frustrationsList[0] ? `"${frustrationsList[0]}"` : 'Which option offers the best value?',
        doing: 'Comparing features, checking pricing, reading reviews',
        feeling: hasFrustrations ? 'Frustrated by limited options' : 'Engaged and analytical'
      },
      {
        stage: 'Evaluation',
        emotion: 'anxious',
        emotionLevel: 2,
        thinking: hasFrustrations && frustrationsList[1] ? `Concerned: "${frustrationsList[1]}"` : 'Will this solve my problem?',
        doing: 'Testing demos, calculating ROI, seeking validation',
        feeling: 'Anxious about making wrong choice'
      },
      {
        stage: 'Decision',
        emotion: 'hopeful',
        emotionLevel: 4,
        thinking: hasGoals && goalsList[1] ? `"This will help me ${goalsList[1].toLowerCase()}"` : 'This seems like the right fit',
        doing: 'Making purchase, setting up account',
        feeling: 'Hopeful and committed'
      },
      {
        stage: 'Onboarding',
        emotion: 'excited',
        emotionLevel: 5,
        thinking: 'Ready to get started and see results',
        doing: 'Learning features, setting preferences, exploring',
        feeling: 'Excited and motivated'
      },
      {
        stage: 'Usage',
        emotion: 'satisfied',
        emotionLevel: 4,
        thinking: hasGoals && goalsList[2] ? `Achieving: "${goalsList[2]}"` : 'This is meeting my needs',
        doing: 'Regular usage, integrating into workflow',
        feeling: 'Satisfied and productive'
      }
    ];
  };

  const journeyStages = generateJourneyStages();

  // Emotion emoji mapping
  const getEmotionEmoji = (emotion) => {
    const emojiMap = {
      curious: '🤔',
      interested: '😊',
      frustrated: '😤',
      anxious: '😰',
      hopeful: '🙂',
      excited: '😃',
      satisfied: '😌',
      happy: '😊'
    };
    return emojiMap[emotion] || '😐';
  };

  // Emotion color mapping
  const getEmotionColor = (emotionLevel) => {
    if (emotionLevel >= 4) return '#10b981'; // green
    if (emotionLevel === 3) return '#f59e0b'; // orange
    return '#ef4444'; // red
  };

  return (
    <div className="persona-journey-wrapper">
      <div className="journey-header">
        <h2 className="journey-title">User Journey Map</h2>
        <p className="journey-subtitle">
          {name ? `${name}'s` : 'User'} experience throughout their interaction
        </p>
      </div>

      {/* Journey Swimlanes */}
      <div className="journey-swimlanes">
        {/* Header Row - Journey Stages */}
        <div className="swimlane-row header-row">
          <div className="swimlane-label">Journey Stage</div>
          <div className="swimlane-stages">
            {journeyStages.map((stage, index) => (
              <div key={index} className="stage-column">
                <div className="stage-number">{index + 1}</div>
                <h3 className="stage-title">{stage.stage}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Emotional State Row */}
        <div className="swimlane-row emotion-row">
          <div className="swimlane-label">
            <span className="label-icon">😊</span>
            <span>Emotional State</span>
          </div>
          <div className="swimlane-stages">
            {journeyStages.map((stage, index) => (
              <div key={index} className="stage-column">
                <div className="emotion-indicator" style={{ backgroundColor: getEmotionColor(stage.emotionLevel) }}>
                  <span className="emotion-emoji-large">{getEmotionEmoji(stage.emotion)}</span>
                  <span className="emotion-label">{stage.emotion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thinking Row */}
        <div className="swimlane-row thinking-row">
          <div className="swimlane-label">
            <span className="label-icon">💭</span>
            <span>Thinking</span>
          </div>
          <div className="swimlane-stages">
            {journeyStages.map((stage, index) => (
              <div key={index} className="stage-column">
                <p className="stage-text">{stage.thinking}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feeling Row */}
        <div className="swimlane-row feeling-row">
          <div className="swimlane-label">
            <span className="label-icon">❤️</span>
            <span>Feeling</span>
          </div>
          <div className="swimlane-stages">
            {journeyStages.map((stage, index) => (
              <div key={index} className="stage-column">
                <p className="stage-text">{stage.feeling}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Doing Row */}
        <div className="swimlane-row doing-row">
          <div className="swimlane-label">
            <span className="label-icon">👉</span>
            <span>Doing</span>
          </div>
          <div className="swimlane-stages">
            {journeyStages.map((stage, index) => (
              <div key={index} className="stage-column">
                <p className="stage-text">{stage.doing}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emotional Curve */}
      <div className="emotional-curve-container">
        <div className="curve-label">Emotional Journey</div>
        <svg className="emotional-curve" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <polyline
            fill="none"
            stroke="url(#curveGradient)"
            strokeWidth="4"
            points={journeyStages.map((stage, index) => {
              const x = (index / (journeyStages.length - 1)) * 1200;
              const y = 150 - (stage.emotionLevel * 25);
              return `${x},${y}`;
            }).join(' ')}
          />
          {journeyStages.map((stage, index) => {
            const x = (index / (journeyStages.length - 1)) * 1200;
            const y = 150 - (stage.emotionLevel * 25);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="6"
                fill={getEmotionColor(stage.emotionLevel)}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        <div className="curve-axis">
          <span>😢 Low</span>
          <span>😊 High</span>
        </div>
      </div>

      {/* Journey Insights */}
      <div className="journey-insights">
        <h3>Key Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-icon">🎯</div>
            <h4>Critical Moments</h4>
            <p>The evaluation and decision stages show high anxiety - provide clear comparisons and social proof.</p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">💡</div>
            <h4>Opportunities</h4>
            <p>Emotional peaks during onboarding - leverage this excitement with guided tours and quick wins.</p>
          </div>
          <div className="insight-card">
            <div className="insight-icon">⚠️</div>
            <h4>Pain Points</h4>
            <p>Research phase shows frustration - simplify information architecture and reduce cognitive load.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonaJourney;

