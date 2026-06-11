import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
  };

  return (
    <div className="bg-purple-100 p-6 rounded max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">💬 Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback..."
          className="border p-2 rounded w-full mb-2"
        />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
