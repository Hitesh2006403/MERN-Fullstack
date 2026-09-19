
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

// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventSection from "./Components/Eventsection";
// import Footer from "./Components/footer";

// function App() {
//   return (
//     <main className="app">
//       <Navbar />
//       <Hero />
//       <EventSection />
//       <Footer />
//     </main>
//   );
// }

import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import EventForm from "./Components/EventForm";
import EventSection from "./Components/Eventsection";
import Footer from "./Components/footer";
import { initialEvents } from "./Data/Event";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <main id="home">
        <Hero
          title="Discover What Is Happening on Campus"
          description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
        />

        <EventForm onAddEvent={handleAddEvent} />

        <EventSection events={events} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

