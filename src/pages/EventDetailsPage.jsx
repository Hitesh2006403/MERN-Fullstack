import { Link, useParams } from "react-router-dom";

function EventDetailsPage({ events }) {
  const { eventId } = useParams();

  const selectedEvent = events.find(function (event) {
    return event.id === Number(eventId);
  });

  if (selectedEvent === undefined) {
    return (
      <section className="event-details-page event-not-found">
        <h1>Event Not Found</h1>

        <Link
          className="details-button"
          to="/events"
        >
          Back to Events
        </Link>
      </section>
    );
  }

  return (
    <section className="event-details-page">
      <div className="event-details-header">
        <p className="event-category">
          {selectedEvent.category}
        </p>

        <p className="event-details-kicker">Campus activity spotlight</p>
        <h1>{selectedEvent.title}</h1>
        <p className="event-description">
          {selectedEvent.description}
        </p>
      </div>

      <div className="details-box">
        <div className="detail-item">
          <span className="detail-label">Date</span>
          <strong>{selectedEvent.date}</strong>
        </div>

        <div className="detail-item">
          <span className="detail-label">Time</span>
          <strong>{selectedEvent.time}</strong>
        </div>

        <div className="detail-item">
          <span className="detail-label">Location</span>
          <strong>{selectedEvent.location}</strong>
        </div>
      </div>

      <Link className="back-to-events" to="/events">
        <span aria-hidden="true">←</span> Back to all events
      </Link>
    </section>
  );
}

export default EventDetailsPage;