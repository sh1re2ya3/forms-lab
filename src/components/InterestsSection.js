import { THINGS_YOU_ENJOY, WEEKEND_ACTIVITIES } from "../constants/formOptions";
import { useRef, useState } from "react";

function InterestsSection({ values, errors, handleChange }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [drawingSaved, setDrawingSaved] = useState(false);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    handleChange("favoriteCharacterImage", file);
  }

  function startDrawing() {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    setDrawing(true);
    setDrawingSaved(false);
  }

  function stopDrawing() {
    setDrawing(false);
  }

  function clearDrawing() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function draw(e) {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#333";

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);

    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  }

  function saveDrawing() {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL();
    handleChange("favoriteCharacterImage", dataURL);
    setDrawingSaved(true);
  }

  function handleCheckboxChange(name, option) {
    let updated = [...values[name]];

    if (updated.includes(option)) {
      updated = updated.filter((item) => item !== option);
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
              Array.from(e.target.selectedOptions, (o) => o.value),
            )
          }
        >
          {THINGS_YOU_ENJOY.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label>What do you like doing on weekends?</label>

        {WEEKEND_ACTIVITIES.map((option) => (
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

      <div className="form-field">
        <label>Picture of your favorite character</label>

        <div className="file-actions">
          <input type="file" accept="image/*" onChange={handleUpload} />

          <button type="button" onClick={() => setShowCanvas(!showCanvas)}>
            Draw Instead
          </button>
        </div>

        {showCanvas && (
          <div className="drawing-area">
            <canvas
              ref={canvasRef}
              width={300}
              height={200}
              className="drawing-canvas"
              onMouseDown={startDrawing}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onMouseMove={draw}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />

            <button type="button" onClick={saveDrawing}>
              Save Drawing
            </button>

            <button
              type="button"
              onClick={clearDrawing}
              className="secondary-btn"
            >
              Clear
            </button>
            {drawingSaved && <p className="drawing-feedback">Saved!</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default InterestsSection;
