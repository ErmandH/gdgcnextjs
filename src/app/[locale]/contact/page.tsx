'use client';

import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <ContactHero />
      <div className="container mx-auto px-4 py-16 -mt-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}