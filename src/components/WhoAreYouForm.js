import BasicInfoSection from "./BasicInfoSection";
import LocationSection from "./LocationSection";
import PersonalitySection from "./PersonalitySection";
import InterestsSection from "./InterestsSection";
import LifestyleSection from "./LifestyleSection";
import BucketListSection from "./BucketListSection";
import TravelTableSection from "./TravelTableSection";

function WhoAreYouForm({ values, errors, handleChange, handleSubmit }) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Basic Information</h2>
        <BasicInfoSection
          values={values.basicInfo}
          errors={errors}
          handleChange={(name, value) =>
            handleChange("basicInfo." + name, value)
          }
        />

        <h2>Location</h2>
        <LocationSection
          values={values.location}
          errors={errors}
          handleChange={(name, value) =>
            handleChange("location." + name, value)
          }
        />

        <h2>Personality</h2>
        <PersonalitySection
          values={values.personality}
          errors={errors}
          handleChange={(name, value) =>
            handleChange("personality." + name, value)
          }
        />

        <h2>Interests</h2>
        <InterestsSection
          values={values.interests}
          errors={errors}
          handleChange={(name, value) =>
            handleChange("interests." + name, value)
          }
        />

        <h2>Lifestyle</h2>
        <LifestyleSection
          values={values.lifestyle}
          errors={errors}
          handleChange={(name, value) =>
            handleChange("lifestyle." + name, value)
          }
        />

        <h2>Bucket List</h2>
        <BucketListSection
          values={values.bucketList}
          handleChange={(name, value) => handleChange(name, value)}
        />

        <h2>Places you've traveled</h2>

        <TravelTableSection
          values={values.travels}
          handleChange={(name, value) => handleChange(name, value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default WhoAreYouForm;
