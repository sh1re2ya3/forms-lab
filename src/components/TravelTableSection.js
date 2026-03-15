function TravelTableSection({ values, handleChange }) {

  function handleCellChange(index, field, value) {
    const updated = [...values];

    updated[index] = {
      ...updated[index],
      [field]: value
    };

    handleChange("travels", updated);
  }

  function addRow() {
    const updated = [
      ...values,
      { place: "", year: "", memory: "" }
    ];

    handleChange("travels", updated);
  }

  function removeRow(index) {
    const updated = values.filter((_, i) => i !== index);
    handleChange("travels", updated);
  }

  return (
    <div>

      <h3>Places you've traveled</h3>

      <table className="form-table">

        <thead>
          <tr>
            <th>Place</th>
            <th>Year</th>
            <th>Memory</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          {values.map((row, index) => (
            <tr key={index}>

              <td>
                <input
                  type="text"
                  value={row.place}
                  placeholder="Where did you go"
                  onChange={(e) =>
                    handleCellChange(index, "place", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="number"
                  value={row.year}
                  placeholder="When did you go"
                  min="1900" max="2026"
                  onChange={(e) =>
                    handleCellChange(index, "year", e.target.value)
                  }
                />
              </td>

              <td>
                <input
                  type="text"
                  value={row.memory}
                  placeholder="What did you do"
                  onChange={(e) =>
                    handleCellChange(index, "memory", e.target.value)
                  }
                />
              </td>

              <td>
                <button
                  type="button"
                  onClick={() => removeRow(index)}
                >
                  ✕
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <button
        type="button"
        onClick={addRow}
      >
        + Add Row
      </button>

    </div>
  );
}

export default TravelTableSection;