import Script from 'next/script';

export function Schema({ json }: { json: Record<string, any> }) {
  return (
    <Script
      id={`schema-${json['@type'] ?? 'jsonld'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}