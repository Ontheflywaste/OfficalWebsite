'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={index}
            className="bg-surface-card border border-surface-card-border rounded-xl overflow-hidden hover:border-primary transition-colors"
          >
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-page transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-lg font-semibold text-ink pr-8">{faq.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-6 pb-5 pt-2">
                <p className="text-ink-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
