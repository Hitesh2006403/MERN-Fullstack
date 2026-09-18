
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
function App(){
  return(
    <div>
      <Navbar />
      <main id = "home">
        <h1>College Course Explorer</h1>
        <p>React Learning Project</p>
      </main>
    </div>
  );
}
export default App;