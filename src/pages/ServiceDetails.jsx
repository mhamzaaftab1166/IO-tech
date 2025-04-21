import React from "react";

function ServiceDetail() {
  return (
    <section className="text-base leading-7 text-stone-900">
      <img
        src="/Hero/banner.png"
        alt="Legal services header image"
        className="object-contain w-full aspect-[1.65]"
      />

      <div className="max-w-[1257px] mx-auto w-full">
        <section className="max-w-4xl mx-auto px-6 py-12 space-y-10">
          <h2 className="text-4xl font-bold text-yellow-950">
            Legal Consultation Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Law Firm is one of the leading legal offices that offer exceptional
            advisory services for both individuals and companies. Our mission is
            to provide comprehensive and specialized legal support to meet our
            clients' needs and offer the best legal solutions in various cases
            and legal fields, we provide our legal consultations services as a
            follow:
          </p>

          {[
            {
              title: "General Legal Consultations",
              items: [
                "At Law Firm, we provide comprehensive legal consultations covering all legal aspects that our clients may encounter in their daily lives or business activities. Our goal is to offer accurate legal advice based on a deep understanding of local and international laws.",
              ],
            },
            {
              title: "Corporate Legal Consultations",
              items: [
                "We at the Law Firm understand the importance of legal consultations for companies in building and enhancing their businesses.",
              ],
              list: [
                "Establishing and registering companies.",
                "All kinds of contracts and agreements.",
                "Commercial disputes.",
                "Compliance with local and international laws and regulations.",
              ],
            },
            {
              title: "Individual Legal Consultations",
              items: [
                "Law Firm offers customized advisory services for individuals, including:",
              ],
              list: [
                "Family issues such as divorce, alimony, and custody.",
                "Real estate matters like buying, selling, and renting properties.",
                "Employment issues such as hiring and wrongful termination.",
                "Criminal cases and defending personal rights.",
              ],
            },
          ].map((block) => (
            <div key={block.title}>
              <h3 className="text-lg font-semibold text-brown-800 mb-2">
                {block.title}
              </h3>
              <div className="pl-4 border-l-4 border-gray-200 p-4 space-y-3">
                {block.items.map((text, i) => (
                  <p key={i} className="text-gray-800 font-medium">
                    {text}
                  </p>
                ))}

                {block.list && (
                  <>
                    <p className="mt-2 font-semibold">
                      Our advisory services include:
                    </p>
                    <ul className="list-none mt-1 space-y-1">
                      {block.list.map((li) => (
                        <li key={li} className="text-gray-700 font-medium">
                          - {li}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
          <p className="mt-20 mb-20 text-gray-700">
            At Law Firm, we aim to provide the best legal services to ensure
            your rights and offer effective legal solutions. Contact us today to
            receive professional and comprehensive legal consultation.
          </p>
        </section>
      </div>
    </section>
  );
}

export default ServiceDetail;
