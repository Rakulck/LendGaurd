import CalendlyWidget from '../../components/CalendlyWidget';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Schedule a Meeting</h1>
      <CalendlyWidget />
    </div>
  );
} 