export default function RecordList({ records, onDelete }) {
    if (!records.length) {
      return <p>No records yet. Create one to get started.</p>;
    }
  
    return (
      <div className="record-list">
        {records.map((r) => (
          <div key={r._id} className="card">
            <div className="record-header">
              <h3>{r.title}</h3>
              <button className="btn danger" onClick={() => onDelete(r._id)}>
                Delete
              </button>
            </div>
            {r.content && <p className="record-content">{r.content}</p>}
            <small className="record-meta">
              Created: {new Date(r.createdAt).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    );
  }
  