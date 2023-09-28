import React from "react";
import Demo from "./Demo";
import DashboardDemo from "./DashboardDemo";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    // <main className="p-6">
    //   <Demo />
    // </main>
    <>
      <DashboardDemo />
    </>
  );
};

export default Home;
