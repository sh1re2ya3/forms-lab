function PersonalitySection({ values, errors, handleChange }) {
  return (
    <div>

      {/* Early Bird / Night Owl */}
      <div className="form-field">

        <div className="toggle-group">

          <label className={`toggle-option ${
            values.earlyBirdOrNightOwl === "earlyBird" ? "active" : ""
          }`}>
            <input
              type="radio"
              name="earlyBirdOrNightOwl"
              value="earlyBird"
              checked={values.earlyBirdOrNightOwl === "earlyBird"}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            🌅 Early Bird
          </label>

          <label className={`toggle-option ${
            values.earlyBirdOrNightOwl === "nightOwl" ? "active" : ""
          }`}>
            <input
              type="radio"
              name="earlyBirdOrNightOwl"
              value="nightOwl"
              checked={values.earlyBirdOrNightOwl === "nightOwl"}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            🌙 Night Owl
          </label>

        </div>

        {errors.earlyBirdOrNightOwl && (
          <p className="error-text">{errors.earlyBirdOrNightOwl}</p>
        )}

      </div>


      {/* Dog / Cat */}
      <div className="form-field">

        <div className="toggle-group">

          <label className={`toggle-option ${
            values.petPreference === "dog" ? "active" : ""
          }`}>
            <input
              type="radio"
              name="petPreference"
              value="dog"
              checked={values.petPreference === "dog"}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            🐶 Dog Person
          </label>

          <label className={`toggle-option ${
            values.petPreference === "cat" ? "active" : ""
          }`}>
            <input
              type="radio"
              name="petPreference"
              value="cat"
              checked={values.petPreference === "cat"}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            🐱 Cat Person
          </label>

        </div>

        {errors.petPreference && (
          <p className="error-text">{errors.petPreference}</p>
        )}

      </div>

    </div>
  );
}

export default PersonalitySection;