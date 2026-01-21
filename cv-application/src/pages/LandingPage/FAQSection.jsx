import { useState } from "react";
import FAQItem from "../../components/FAQItem";

const faqs = [
  {
    question: "Is QuickCV free to use?",
    answer: "Yes, you can create and download your CV for free."
  },
  {
    question: "Can I edit my CV after downloading?",
    answer: "Absolutely. You can update your CV anytime."
  },
  {
    question: "Do I need an account?",
    answer: "No account is required to get started."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleToggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <div id="faq-section">
      <h2>Frenquently Asked Questions</h2>

      {
        faqs.map((faq, index) => {
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        })
      }
    </div>
  );
}
