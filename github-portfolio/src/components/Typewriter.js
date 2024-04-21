import React, { useState, useEffect } from "react";

const Typewriter = ({ messages, typingSpeed = 100, deletingSpeed = 50 }) => {
  const [index, setIndex] = useState(0); // Index to track the current message
  const [displayedText, setDisplayedText] = useState(""); // The text that is currently being displayed on the screen.
  const [isDeleting, setIsDeleting] = useState(false); // State to track whether we are typing or deleting
  useEffect(() => {
    let timer;
    if (isDeleting) {
      // If deleting, set an interval to remove characters
      timer = setInterval(() => {
        setDisplayedText((currentText) => currentText.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false); // Change mode to typing.
          setIndex((prev) => (prev + 1) % messages.length);
        }
      }, deletingSpeed);
    } else {
      // If typing, set an interval to add characters
      timer = setInterval(() => {
        const currentMessage = messages[index]; // Retrieve the current message to be typed based on the index.
        const nextCharIndex = displayedText.length;
        setDisplayedText(currentMessage.slice(0, nextCharIndex + 1));
        if (displayedText === currentMessage) {
          setTimeout(() => setIsDeleting(true), 1500); // Set a timeout to switch to deleting after the message is fully displayed.
        }
      }, typingSpeed);
    }
    return () => clearInterval(timer); // Cleanup interval on component state change
  }, [displayedText, isDeleting, index, messages, typingSpeed, deletingSpeed]);
  return (
    <div className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};
export default Typewriter;
