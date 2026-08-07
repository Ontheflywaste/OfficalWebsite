interface FaqSchemaItem {
  question: string;
  answer: string;
}

// Server component. Inline <script> elements from server components are
// deferred to hydration in this setup, so the JSON-LD is emitted as raw
// HTML to land in the prerendered page (same pattern as blog BlogPosting).
// Feed it the SAME array the page renders visibly so schema can't drift.
export default function FaqSchema({ faqs }: { faqs: FaqSchemaItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const schemaHtml = `<script type="application/ld+json">${JSON.stringify(
    schema
  ).replace(/</g, '\\u003c')}</script>`;

  return <div dangerouslySetInnerHTML={{ __html: schemaHtml }} />;
}
