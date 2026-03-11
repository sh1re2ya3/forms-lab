function BasicInfoSection({ values, errors, handleChange }) {
  return (
    <div>

      <div className="form-field">
        <label>Full Name</label>
        <input
          name="fullName"
          value={values.fullName}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {errors.fullName && <p>{errors.fullName}</p>}
      </div>

      <div className="form-field">
        <label>Username</label>
        <input
          name="username"
          value={values.username}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>

      <div className="form-field">
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="form-field">
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={values.password}
         onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="form-field">
        <label>Birth Date</label>
        <input
          name="birthDate"
          type="date"
          value={values.birthDate}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Describe Yourself</label>
        <textarea
          name="bio"
          value={values.bio}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </div>

    </div>
  );
}

export default BasicInfoSection;