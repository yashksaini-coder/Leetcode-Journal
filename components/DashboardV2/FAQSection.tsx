import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Leetcode Journal, and how can it help me?",
    answer:
      "Leetcode Journal is a tool designed to help developers track, organize, and review their Leetcode solutions. It provides an intuitive interface to save solutions, categorize problems, monitor progress, and analyze performance. It's great for personal learning and showcasing problem-solving skills.",
    value: "item-1",
  },
  {
    question: "Can I import my existing Leetcode solutions into the platform?",
    answer:
      "Yes, Leetcode Journal supports solution imports. You can upload your solutions as files or manually enter them to categorize and analyze them within the platform.",
    value: "item-2",
  },
  {
    question: "How does the progress monitoring feature work?",
    answer:
      "The progress monitoring feature provides detailed statistics on your problem-solving journey, including the number of problems solved by difficulty, topic, and monthly trends. It also shows your streaks and acceptance rates to keep you motivated.",
    value: "item-3",
  },
  {
    question: "Is my data secure on Leetcode Journal?",
    answer:
      "We take data security seriously. All your solutions and progress data are encrypted and securely stored on our servers. You have complete control over your data, and it is never shared without your consent.",
    value: "item-4",
  },
  {
    question: "Can I share my Leetcode Journal with others?",
    answer:
      "Yes, you can create a shareable portfolio of your solutions to showcase your problem-solving skills to potential employers or peers. You can customize what information is shared.",
    value: "item-5",
  },

  {
    question: "Does Leetcode Journal support team collaboration?",
    answer:
      "Currently, Leetcode Journal is focused on individual users. However, we are exploring features for team collaboration and knowledge sharing in future updates.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container mx-auto md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-indigo-500 text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
