import "./App.css";
import { useState, useEffect } from "react";
import Job from "./Job";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then(
        (data) => {
          console.log(data);
          setJobs(data);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <div className="font-spartan container mx-auto bg-light-grayish-cyan">
      <header className="bg-mobile md:bg-desktop bg-dark-cyan bg-no-repeat bg-cover h-24"></header>
      <main>
        {jobs.map((job, index) => (
          <Job key={index} data={job} />
        ))}
      </main>
    </div>
  );
}

export default App;
