"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqs = [
  {
    question: "What is Leetcode Journal, and how can it help me?",
    answer:
      "Leetcode Journal is a tool designed to help developers track, organize, and review their Leetcode solutions. It provides an intuitive interface to save solutions, categorize problems, monitor progress, and analyze performance. It's great for personal learning and showcasing problem-solving skills.",
  },
  {
    question: "Can I import my existing Leetcode solutions into the platform?",
    answer:
      "Yes, Leetcode Journal supports solution imports. You can upload your solutions as files or manually enter them to categorize and analyze them within the platform.",
  },
  {
    question: "How does the progress monitoring feature work?",
    answer:
      "The progress monitoring feature provides detailed statistics on your problem-solving journey, including the number of problems solved by difficulty, topic, and monthly trends. It also shows your streaks and acceptance rates to keep you motivated.",
  },
  {
    question: "Is my data secure on Leetcode Journal?",
    answer:
      "We take data security seriously. All your solutions and progress data are encrypted and securely stored on our servers. You have complete control over your data, and it is never shared without your consent.",
  },
  {
    question: "Can I share my Leetcode Journal with others?",
    answer:
      "Yes, you can create a shareable portfolio of your solutions to showcase your problem-solving skills to potential employers or peers. You can customize what information is shared.",
  },
  {
    question: "Does Leetcode Journal support team collaboration?",
    answer:
      "Currently, Leetcode Journal is focused on individual users. However, we are exploring features for team collaboration and knowledge sharing in future updates.",
  },
];

export default function FAQComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-0">
      {/* Added x-padding for small width devices */}
      <div className="mb-8 relative">
        <Input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 focus:ring-opacity-50 transition duration-300"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400"
          size={20}
        />
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {filteredFaqs.map((faq, index) => (
          <AccordionItem
            value={`item-${index}`}
            key={index}
            className="border-2 border-purple-400 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
          >
            <AccordionTrigger className="text-left px-6 py-4 light:bg-purple-200 dark:bg-white hover:bg-purple-50 transition duration-300">
              <span className="text-lg font-medium text-purple-800">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 bg-purple-200">
              <p className="text-purple-700 text-left">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {filteredFaqs.length === 0 && (
        <div className="text-center text-purple-600 mt-8 p-6 bg-purple-100 rounded-lg">
          <p className="text-xl font-semibold mb-2">
            No matching questions found.
          </p>
          <p>Try adjusting your search terms or browse all FAQs above.</p>
        </div>
      )}
    </div>
  );
}
