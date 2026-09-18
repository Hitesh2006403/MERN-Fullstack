
// import "./App.css";
// function App(){
//   const tarinerName="Nirmal";
//   const trainingDay=3;
//   return(
//     <main className="app">
//       <Navbar />
//       <section className="welcome-card">
//       <p className="day-label">React Day {trainingDay}</p>
//       <h1 className="title">College Course Explorer </h1>
//       <p>Trainer:{tarinerName}</p>
//       <p>React Learning Project</p>
//       <p>Used React,JSX,componets,CSS</p>
//       </section>
//     </main>       
//   );
// }
// export default App;

import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
function App(){
  return(
    <main className="app">
      <Navbar />
      <Hero />
      <section className="welcome-card">
        <p className="day-label">React Day 3</p>
        <h1 className="title">College Course Explorer </h1>
        <p>Trainer:Nirmal</p>
        <p>React Learning Project</p>
        <p>Used React,JSX,componets,CSS</p>
      </section>
    </main>
  );
}
export default App; 