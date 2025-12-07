import { useState } from "react";

export default function RecordForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onCreate({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h3>Create Record</h3>
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Content (optional)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn primary">Add</button>
    </form>
  );
}
