import React from "react";
import EventCard from "./Eventcard.jsx";
import { events } from "../data/events"; // Import the data we made in Step 1

const EventSection = () => {
  return (
    <section id="events" className="py-20 bg-gray-700 rounded-t-4xl">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Events <span className="text-blue-600">Partnered</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-Jost">
            Join us for workshops, hackathons, and community meetups. 
            Connect with other Web3 enthusiasts in Enugu.
          </p>
        </div>

        {/* The Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <EventCard 
              key={event.id}
              image={event.image}
              date={event.date}
              title={event.title}
              location={event.location}
              description={event.description}
              link={event.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EventSection;