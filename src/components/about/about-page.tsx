"use client";

import { motion } from "framer-motion";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { HeroSection } from "../common/HeroSection";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutUs() {
  const t = useTranslations("AboutUs");

  return (
    <>
      <HeroSection title={t('title')} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Hero Section */}
        <motion.section
          className="relative py-10 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {t("hero.description")}
            </motion.p>
          </div>
        </motion.section>

        {/* Community Section */}
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
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t("community.title")}
                    </h2>
                    <p className="text-gray-600">
                      {t("community.description")}
                    </p>

                  </div>
                  <div>
                    <img
                      src="https://picsum.photos/800/600?random=1"
                      alt="Our community"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Join Us Section */}
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
                      alt="Join us"
                      className="rounded-lg shadow-lg w-full object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t("joinUs.title")}
                    </h2>
                    <p className="text-gray-600">{t("joinUs.description")}</p>
                    <Button className="bg-[#4285F4] hover:bg-[#3367d6]">
                      {t("community.cta")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Mission & Vision Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#4285F4]/10 to-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="p-3 bg-[#4285F4] rounded-full w-fit">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t("mission.title")}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {t("mission.description")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0F9D58]/10 to-white">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col h-full space-y-4">
                    <div className="p-3 bg-[#0F9D58] rounded-full w-fit">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {t("vision.title")}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {t("vision.description")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#4285F4] to-[#0F9D58]"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "250+", label: t("stats.activeMembers") },
                { number: "100+", label: t("stats.annualEvents") },
                { number: "50+", label: t("stats.projectsCompleted") },
                { number: "1000+", label: t("stats.workshopHours") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
