import { useEffect, useState } from "react";
import api from "../lib/api";
import RecordForm from "../components/RecordForm.jsx";
import RecordList from "../components/RecordList.jsx";

export default function Records() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRecords = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/records");
      setRecords(res.data);
    } finally {
      setLoading(false);
    }
  };

  const createRecord = async (data) => {
    const res = await api.post("/api/records", data);
    setRecords((prev) => [res.data, ...prev]);
  };

  const deleteRecord = async (id) => {
    await api.delete(`/api/records/${id}`);
    setRecords((prev) => prev.filter((r) => r._id !== id));
  };

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <div className="page">
      <h1>Your Records</h1>
      <RecordForm onCreate={createRecord} />
      {loading ? <p>Loading...</p> : <RecordList records={records} onDelete={deleteRecord} />}
    </div>
  );
}
