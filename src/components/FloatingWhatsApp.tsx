import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-colors"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle className="w-7 h-7 text-white" />
  </a>
);

export default FloatingWhatsApp;
