import { useState } from "react";

function BucketListSection({ values, handleChange }) {

  const [inputValue, setInputValue] = useState("");

  function addItem() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const updated = [...values, trimmed];

    handleChange("bucketList", updated);
    setInputValue("");
  }

  function removeItem(index) {
    const updated = values.filter((_, i) => i !== index);
    handleChange("bucketList", updated);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addItem();
    }
  }

  return (
    <div>

      <h3>Things on your bucket list</h3>

      <div className="bucket-input-row">

        <input
          type="text"
          placeholder="Example: Visit Japan"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          type="button"
          className="add-btn"
          onClick={addItem}
        >
          +
        </button>

      </div>

      <div className="bucket-list">

        {values.map((item, index) => (
          <div className="bucket-chip" key={index}>

            {item}

            <button
              type="button"
              onClick={() => removeItem(index)}
            >
              ✕
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default BucketListSection;