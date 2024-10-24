import { useState } from "react";
import "./accordion.css";

const Accordion = ({ header, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="accordion-header-flex" onClick={toggle}>
        <div className="accordion-header">{header}</div>
        <img
          src="/images/arrow-down.svg"
          alt=""
          className={
            isOpen ? "upArrow accordion-arrow" : "downArrow accordion-arrow"
          }
        />
      </div>
      <div
        className={
          isOpen
            ? "openaccordion accordion-text"
            : "closedaccordion accordion-text"
        }
      >
        {text}
      </div>
    </div>
  );
};

export default Accordion;
