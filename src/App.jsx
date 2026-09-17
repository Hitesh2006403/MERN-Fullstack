
import "./App.css";
function App(){
  const tarinerName="Nirmal";
  const trainingDay=3;
  return(
    <main className="app">
      <section className="welcome-card">
      <p className="day-label">React Day {trainingDay}</p>
      <h1 className="title">College Course Explorer </h1>
      <p>Trainer:{tarinerName}</p>
      <p>React Learning Project</p>
      <p>Used React,JSX,componets,CSS</p>
      </section> 
      <div>
        <nav>
          <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>  
      </div>
      
    </main>       
  );
}
export default App;