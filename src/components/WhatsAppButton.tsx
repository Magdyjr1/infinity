import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '201000100869';
  const defaultMessage = encodeURIComponent(
    'Hello INFINITY Engineering Team, I would like to request technical specifications and a quotation for our project.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact INFINITY on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group text-xs font-semibold cursor-pointer"
    >
      <MessageSquare className="w-4 h-4 fill-white" />
      <span className="hidden sm:inline">WhatsApp Us</span>
      <span className="font-mono text-[11px] opacity-90 hidden md:inline border-l border-white/30 pl-2">
        +20 1000 100 869
      </span>
    </a>
  );
};
