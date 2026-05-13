import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-[#0A1A2F] py-20 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            Your privacy is important to us. It is AsmaTec's policy to respect
            your privacy regarding any information we may collect from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              2. Use of Information
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We primarily use the collected information to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-8">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              3. Log Files
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              AsmaTec follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              4. Cookies and Web Beacons
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Like any other website, AsmaTec uses "cookies". These cookies are
              used to store information including visitors' preferences, and the
              pages on the website that the visitor accessed or visited.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              5. Data Retention
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.
            </p>

            <h2 className="text-2xl font-bold text-[#0A1A2F] mb-6">
              6. Your Rights
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </p>

            <div className="mt-16 p-8 bg-[#f8fafc] rounded-md border border-slate-100">
              <p className="text-sm text-slate-500">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
