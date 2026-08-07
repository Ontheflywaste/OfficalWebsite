export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
    {
      question: "What days do you collect trash?",
      answer: "We offer flexible scheduling up to 7 days per week based on your property's needs. Our customizable collection windows are tailored to your property's specific requirements, ensuring convenient service without disrupting your residents."
    },
    {
      question: "What can residents place out for collection?",
      answer: "Residents can place regular household trash in tied bags outside their door for doorstep collection. Items not accepted include hazardous materials, liquids, construction debris, furniture, or loose trash. Bulk items can be scheduled separately through our bulk trash pickup service."
    },
    {
      question: "How much does valet trash service cost?",
      answer: "Pricing varies based on the number of units, property layout, and specific service requirements. Contact us for a free, customized quote for your property."
    },
    {
      question: "What happens if trash is missed?",
      answer: "We maintain a 100% collection commitment with GPS-tracked truck routing. If a missed pickup is verified — through a Ring camera, a building-level confirmation, or our own truck GPS data — we make it right. If a property manager wants truck GPS confirmation for a specific night, building, or trash bin, we can pull it on request."
    },
    {
      question: "Do you provide recycling services?",
      answer: "Yes! Recycling services are available for communities with an existing recycling plan in place. We work within your property's established recycling program and properly sort and dispose of recyclable materials according to local regulations."
    },
    {
      question: "How quickly can service start?",
      answer: "We can typically begin service within 7-14 days of contract signing. This includes time for resident communication, staff training, and property walkthrough."
    }
];
