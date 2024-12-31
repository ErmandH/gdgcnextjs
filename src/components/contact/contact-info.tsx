"use client";

import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactInfo() {
  const t = useTranslations("Contact.info");

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">{t("title")}</h2>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-[#4285F4]/10 group-hover:bg-[#4285F4] transition-colors duration-300">
            <Mail className="h-5 w-5 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#4285F4]">{t("email.label")}</p>
            <p className="font-medium">{t("email.value")}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-[#4285F4]/10 group-hover:bg-[#4285F4] transition-colors duration-300">
            <MapPin className="h-5 w-5 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#4285F4]">{t("address.label")}</p>
            <p className="font-medium">{t("address.line1")}</p>
            <p className="font-medium">{t("address.line2")}</p>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-[#4285F4]/10 group-hover:bg-[#4285F4] transition-colors duration-300">
            <Instagram className="h-5 w-5 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#4285F4]">{t("social.instagram")}</p>
            <p className="font-medium">
              <a href="https://www.instagram.com/gdgoncampusiuc/" target="_blank" rel="noopener noreferrer">
                @gdgoncampusiuc
              </a>
            </p>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-[#4285F4]/10 group-hover:bg-[#4285F4] transition-colors duration-300">
            <Linkedin className="h-5 w-5 text-[#4285F4] group-hover:text-white transition-colors duration-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-[#4285F4]">{t("social.linkedin")}</p>
            <p className="font-medium">
              <a href="https://www.linkedin.com/company/google-developer-student-club-istanbul-university-cerrahpasa/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              Google Developer Groups on Campus İstanbul University-Cerrahpasa
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
