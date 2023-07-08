import React, { useState } from "react";

function UserForm() {
  const [score, setScore] = useState(10);

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    if (Number(score) <= 5 && comment.length <= 5) {
      alert("The minimum number of characters is 10");
    }
    e.preventDefault();
    setScore(10);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>Feedback Form</h2>
        <div>
          <label>Score: {score}</label>
        </div>
        <div>
          <input
            type="range"
            min={0}
            max={10}
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default UserForm;
