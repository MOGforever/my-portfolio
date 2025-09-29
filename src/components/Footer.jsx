import { useState, useEffect } from 'react';
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // This sets up an interval that updates the time every second.
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // This cleans up the interval when the component is no longer on the screen.
    return () => {
      clearInterval(timer);
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts.

  // --- Formatting ---

  // Get year for the copyright
  const year = currentDateTime.getFullYear();

  // Format the date to DD-MM-YYYY
  const day = String(currentDateTime.getDate()).padStart(2, '0');
  const month = String(currentDateTime.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
  const formattedDate = `${day}-${month}-${year}`;

  // Get the local time string (e.g., "5:26:36 PM")
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p>{formattedDate} | {formattedTime}</p>
      <p>&copy; {year} MOGforever.com <p>All rights reserved.</p></p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};