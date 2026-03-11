function LifestyleSection({ values, errors, handleChange }) {
  return (
    <div>

      <div className="form-field">
        <label>How many hobbies do you have?</label>

        <input
          type="number"
          name="hobbiesCount"
          value={values.hobbiesCount}
          onChange={(e) =>
            handleChange(e.target.name, Number(e.target.value))
          }
        />

      </div>


      <div className="form-field">
        <label>How is your day going?</label>

        <input
          type="range"
          name="moodLevel"
          min="0"
          max="100"
          value={values.moodLevel}
          onChange={(e) =>
            handleChange(e.target.name, Number(e.target.value))
          }
        />

      </div>


      <div className="form-field">
        <label>Your favorite color</label>

        <input
          type="color"
          name="favoriteColor"
          value={values.favoriteColor}
          onChange={(e) =>
            handleChange(e.target.name, e.target.value)
          }
        />

      </div>

    </div>
  );
}

export default LifestyleSection;