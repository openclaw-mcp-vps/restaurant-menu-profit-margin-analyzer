export default function Page() {
  const faqs = [
    {
      q: "Which POS systems do you support?",
      a: "We integrate with Square and Toast out of the box. More integrations are on the roadmap."
    },
    {
      q: "How are ingredient costs calculated?",
      a: "We pull live pricing from your linked supplier accounts and combine it with your recipes to compute per-dish food cost in real time."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from your billing portal at any time — no contracts, no cancellation fees."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Restaurant Profit Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Your Real&#8209;Time Profit Margin<br className="hidden sm:block" /> on Every Menu Item
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Square or Toast and your supplier accounts. We calculate live food costs, flag margin killers, and surface which dishes actually make you money.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to start. Cancel anytime.</p>

        {/* Mini feature grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            { icon: "📊", title: "Live Margin Dashboard", body: "Per-item profitability updated as ingredient prices change." },
            { icon: "🔔", title: "Cost Spike Alerts", body: "Instant notifications when food costs erode your margins." },
            { icon: "💡", title: "Menu Optimization", body: "Actionable recommendations to reprice or reformulate dishes." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
              <div className="text-xs text-[#8b949e]">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">All-Inclusive Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">per month · unlimited menu items</div>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Square & Toast POS integration",
              "Supplier price sync",
              "Real-time margin calculations",
              "Cost spike email & SMS alerts",
              "Menu optimization report",
              "Up to 5 team members"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>{item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Menu Profit Analyzer. All rights reserved.
      </footer>
    </main>
  );
}
