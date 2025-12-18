import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
            <MessageCircle className="text-white w-6 h-6" />
        </a>
    );
}
