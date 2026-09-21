import EventForm from "../Components/EventForm";
import EventSection from "../Components/Eventsection";
import Hero from "../Components/Hero";

function Homepage({ events, onAddEvent }) {
    return (
        <div>
            <Hero
              title="Discover What Is Happening on Campus"
              description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
            />
            <EventForm onAddEvent={onAddEvent} />
            <EventSection events={events} />
        </div>
    );
}

export default Homepage;