import {
  THINGS_YOU_ENJOY,
  WEEKEND_ACTIVITIES
} from "../constants/formOptions";

function InterestsSection({ values, errors, handleChange }) {

  function handleCheckboxChange(name, option) {
    let updated = [...values[name]];

    if (updated.includes(option)) {
      updated = updated.filter(item => item !== option);
    } else {
      updated.push(option);
    }

    handleChange(name, updated);
  }

  return (
    <div>

      <div className="form-field">
        <label>Things you enjoy</label>

        <select
          multiple={true}
          name="thingsYouEnjoy"
          value={values.thingsYouEnjoy}
          onChange={(e) =>
            handleChange(
              e.target.name,
              Array.from(e.target.selectedOptions, o => o.value)
            )
          }
        >

          {THINGS_YOU_ENJOY.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

        </select>
      </div>


      <div className="form-field">
        <label>What do you like doing on weekends?</label>

        {WEEKEND_ACTIVITIES.map(option => (
          <label key={option.value}>

            <input
              type="checkbox"
              checked={values.weekendActivities.includes(option.value)}
              onChange={() =>
                handleCheckboxChange("weekendActivities", option.value)
              }
            />

            {option.label}

          </label>
        ))}

      </div>

    </div>
  );
}

export default InterestsSection;