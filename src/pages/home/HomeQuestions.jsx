import { useState } from "react";
import "./HomeQuestions.css";

const questions = [
  {
    question: "What type of insurance do I actually need?",
    answer:
      "This depends on your personal or business risks. We help assess your situation and recommend cover that protects what matters most without unnecessary extras.",
  },
  {
    question: "How much cover should I have?",
    answer:
      "The right amount depends on the value of your assets, your liabilities, and the level of risk you are exposed to. We guide you through this so you are not underinsured.",
  },
  {
    question: "Why are my premiums increasing?",
    answer:
      "Premiums can increase due to claims history, inflation, replacement costs, risk changes, and insurer adjustments. We help review your policy and look for better options where possible.",
  },
  {
    question: "What does my policy actually cover (and NOT cover)?",
    answer:
      "We explain the fine print in plain language, including exclusions, limits, excesses, and conditions, so you know exactly what you are covered for.",
  },
  {
    question: "How do I claim, and how long does it take?",
    answer:
      "We assist with the claims process, required documents, and communication with insurers. Timelines depend on the type of claim and how quickly supporting information is provided.",
  },
];

export function HomeQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleQuestion(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="faq-section">
      <div className="section-header">
        <h2>Frequently Asked Questions</h2>
        <div className="header-line"></div>
      </div>

      <div className="faq-container">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${
              openIndex === index ? "open" : ""
            }`}
          >
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              type="button"
            >
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}