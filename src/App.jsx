
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

// import { useState } from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventForm from "./Components/EventForm";
// import EventSection from "./Components/Eventsection";
// import Footer from "./Components/footer";
// import { initialEvents } from "./Data/Event";

// function App() {
//   const [events, setEvents] = useState(initialEvents);

//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   return (
//     <div>
//       <Navbar />

//       <main id="home">
//         <Hero
//           title="Discover What Is Happening on Campus"
//           description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
//         />

//         <EventForm onAddEvent={handleAddEvent} />

//         <EventSection events={events} />
//       </main>

//       <Footer />
//     </div>
//   );
// }
// export default App;


// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventForm from "./Components/EventForm";
// import EventSection from "./Components/Eventsection";
// import Footer from "./Components/footer";
// import { initialEvents } from "./Data/Event";

// function App() {
//   const [events, setEvents] = useState(initialEvents || []);

//   function handleAddEvent(newEvent) {
//     setEvents((currentEvents) => [...currentEvents, newEvent]);
//   }

//   return (
//     <BrowserRouter>
//       <div className="app">
//         <Navbar />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero
//                   title="Discover What Is Happening on Campus"
//                   description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
//                 />
//                 <EventForm onAddEvent={handleAddEvent} />
//                 <EventSection events={events} />
//               </>
//             }
//           />

//           <Route
//             path="/events"
//             element={<EventSection events={events} />}
//           />

//           <Route
//             path="/about"
//             element={
//               <section>
//                 <h1>About Campus Events</h1>
//                 <p>Discover events happening on campus.</p>
//               </section>
//             }
//           />
//         </Routes>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
// import "./App.css";
// function App() {
//   const trainername="Manoj";
//   const trainingday=3;
//   return (
//     <main className="App">
//       <section className="App-header">
//       <p className="daylabel">React day</p>
//       <h2 className="title">College course explore </h2>
//       <p>Trainer:{trainername}</p>
//       <p>Training Day:{trainingday}</p>
//       <p>used react,jsx,componenrs</p>
//     </section>
//     </main>
//   );
// } 
// export default App;
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventSection from "./Components/EventSection";
// import Footer from "./Components/footer";
// function App() {
//   return (
//     <div>
//       <Navbar />
//       <main className="App">
//         <h1>Welcome to Campus Connect</h1>
//       </main>
//       <Hero />
//       <EventSection />
//        <Footer />
//     </div>
//   );
// }
// export default App;
// import { useState } from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import EventForm from "./Components/EventForm";
// import EventSection from "./Components/EventSection";
// import Footer from "./Components/footer";
// import { initialEvents } from "./data/events";
// import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";
// function App() {
//   const [events, setEvents] = useState(initialEvents);

//   function handleAddEvent(newEvent) {
//     setEvents([...events, newEvent]);
//   }

//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <main id="home">
//               <Hero
//                 title="Discover What Is Happening on Campus"
//                 description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
//               />
//               <EventSection events={events} />
//               <EventForm onAddEvent={handleAddEvent} />
//             </main>
//           }
//         />
//         <Route path="/pages/about" element={<About />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import AboutPage from "./pages/AboutPage";

import { initialEvents } from "./Data/Event";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              events={events}
              onAddEvent={handleAddEvent}
            />
          }
        />

        <Route
          path="/events"
          element={
            <EventsPage events={events} />
          }
        />

        <Route
          path="/events/:eventId"
          element={
            <EventDetailsPage events={events} />
          }
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;