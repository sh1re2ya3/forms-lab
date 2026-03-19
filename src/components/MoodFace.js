function MoodFace({ moodLevel }) {
  // Calculate mouth curve based on mood level (0-100)
  // At 0: sad curve (negative arc), at 100: big smile (positive arc)
  const mouthCurve = (moodLevel - 50) * 1.2; // Range: -60 to 60
  const eyeHeight = 35 + moodLevel * 0.15; // Eyes get higher when happy

  // Calculate mouth path based on curve
  const mouthPath =
    moodLevel < 50
      ? `M 35 60 Q 50 ${65 - mouthCurve * 0.6} 65 60` // Sad mouth
      : `M 35 60 Q 50 ${65 + mouthCurve * 0.6} 65 60`; // Happy mouth

  // Color transitions from red (sad) to green (happy)
  const faceColor = `hsla(56 81.9% 63.1% / 0.5)`;

  return (
    <div className="mood-face">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Face circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill={faceColor}
          strokeWidth="2"
        />

        {/* Left eye */}
        <circle
          cx="35"
          cy="40"
          r="4"
          fill="#5d487ea4"
          style={{
            transition: "cy 0.3s ease",
          }}
        />

        {/* Right eye */}
        <circle
          cx="65"
          cy="40"
          r="4"
          fill="#5d487ea4"
          style={{
            transition: "cy 0.3s ease",
          }}
        />

        {/* Mouth */}
        <path
          d={mouthPath}
          stroke="#5d487ea4"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{
            transition: "d 0.3s ease",
          }}
        />
      </svg>
    </div>
  );
}

export default MoodFace;
