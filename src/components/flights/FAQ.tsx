"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/service/api";
import flightsData from "@/data/flights.json";

export default function FAQ() {
  const { faqs: fallbackFaqs } = flightsData;

  const { data, isLoading } = useQuery({
    queryKey: ['faqs'],
    queryFn: () => apiClient.get('/faqs/'),
  });

  const faqs = data?.data && data.data.length > 0 ? data.data : fallbackFaqs;

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl font-extrabold text-[#111827] mb-12">FAQ</h2>
      
      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-[#FF6D38] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq: any, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id || index}
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-orange-200 bg-white shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-semibold text-[#111827] pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#FF6D38] text-white' : 'bg-orange-50 text-transparent'}`}>
                    {/* Subtle indication for expansion state */}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-[#3E4D60] font-medium leading-relaxed bg-white rounded-b-2xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
