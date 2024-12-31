"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { HeroSection } from "../common/HeroSection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function EventsPage() {
  const t = useTranslations("Events");

  return (
    <>
		<HeroSection title={t("hero.title")} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <motion.section
          className="relative py-10 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {t("hero.description")}
            </motion.p>
          </div>
        </motion.section>

        {/* Innovate 360 Section */}
        <motion.section
          className="py-4 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="https://picsum.photos/800/600?random=1"
                      alt="Innovate 360 Conference"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t("innovate360.title")}
                    </h2>
                    <p className="text-gray-600">
                      {t("innovate360.description")}
                    </p>
                  </div>
				  <div className="space-y-6">
                    <p className="text-gray-600">
                      {t("innovate360.description2")}
                    </p>
					<p className="text-gray-600">
                      {t("innovate360.description3")}
                    </p>
                  </div>
				  <div>
                    <img
                      src="https://picsum.photos/800/600?random=1"
                      alt="Innovate 360 Conference"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Monthly Activities Section */}
        <motion.section
          className="py-4 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				<div>
                    <img
                      src="https://picsum.photos/800/600?random=2"
                      alt="Monthly Activities"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t("monthlyActivities.title")}
                    </h2>
                    <p className="text-gray-600">
                      {t("monthlyActivities.description")}
                    </p>
                  </div>


				  <div className="space-y-6">
                    <p className="text-gray-600">
                      {t("monthlyActivities.description2")}
                    </p>
					<p className="text-gray-600">
                      {t("monthlyActivities.description3")}
                    </p>
                  </div>

				  <div>
                    <img
                      src="https://picsum.photos/800/600?random=2"
                      alt="Monthly Activities"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </div>
    </>
  );
}
