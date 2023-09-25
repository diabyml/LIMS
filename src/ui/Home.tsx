import React from "react";
import { Button } from "./Button";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <main className="p-6">
      <Button
        onClick={async () => {
          const res = await (window as any).electronAPI.onAddPatient({
            name: "John doe",
          });
          console.log(res);
        }}
      >
        Save to database
      </Button>
      <div className="pt-4">
        <Button
          onClick={async () => {
            const res = await (window as any).electronAPI.onGetPatients();
            console.log(res);
          }}
        >
          Get patients
        </Button>
      </div>
    </main>
  );
};

export default Home;
