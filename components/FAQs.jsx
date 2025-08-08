const FAQSection = () => {
  return (
    <section id="faq" className="bg-[#0f0f0f] py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">

          {[
            {
              q: "What services do you offer?",
              a: "We specialize in Landing Page Design, Admin Panel Development, Full Stack Web Development, and AI integration support.",
            },
            {
              q: "How long does it take to complete a project?",
              a: "Depending on the scope, small projects can be completed in 1-2 weeks, while larger full-stack applications may take 3-6 weeks.",
            },
            {
              q: "Do you offer post-launch support?",
              a: "Yes, we offer 15 days of free support after launch. For long-term maintenance, custom plans are available.",
            },
            {
              q: "Can you build custom admin panels?",
              a: "Absolutely! We create user-friendly and scalable admin panels tailored to your business needs.",
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-[#2c2c2c] hover:border-yellow-400 transition-all"
            >
              <summary className="cursor-pointer text-lg font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-gray-300">{item.a}</p>
            </details>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
