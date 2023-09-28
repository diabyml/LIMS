import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { set } from "mongoose";

function Demo() {
  const [name, setName] = useState("");
  const [editing, setEditing] = useState("");
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await (window as any).electronAPI.onGetPatients();
      const data = JSON.parse(response);
      setPatients(data);
    })();
  }, []);

  return (
    <div>
      <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <div className="pt-4">
        <Button
          onClick={async () => {
            const res = await (window as any).electronAPI.onAddPatient({
              name,
            });
            const data = JSON.parse(res);
            console.log(data);
            setPatients((prev) => [data, ...prev]);
          }}
        >
          Save to database
        </Button>
      </div>
      {/* <div className="pt-4">
        <Button
          onClick={async () => {
            const res = await (window as any).electronAPI.onGetPatients();
            
          }}
        >
          Get patients
        </Button>
      </div> */}
      <div className="pt-5">
        {patients.map((p) => (
          <div
            key={p._id}
            className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0  "
          >
            <input
              className="w-full"
              type="text"
              value={p.name}
              onChange={async (e) => {
                const res = await (window as any).electronAPI.onEditPatient(
                  p._id,
                  { name: e.target.value }
                );
                const data = JSON.parse(res);
                setPatients((prev) =>
                  prev.map((p) => (p._id === data._id ? data : p))
                );
              }}
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={async () => {
                // call electron api to delete patient
                const res = await (window as any).electronAPI.onDeletePatient(
                  p._id
                );
                // console.log("delete res:", res);
                const data = JSON.parse(res);
                setPatients((prev) => prev.filter((p) => p._id !== data._id));
                // console.log("deleted:", data);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Demo;
