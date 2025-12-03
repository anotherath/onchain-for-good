import FundProposalCard from "../cards/fund-proposal-card";

export default function FundProposalList() {
  const proposals = [
    {
      title: "Install 5 new wells in village A",
      status: "Approved",
      forVotes: 1250,
      againstVotes: 50,
    },
    {
      title: "Community water safety training program",
      status: "Open",
      forVotes: 850,
      againstVotes: 200,
    },
    {
      title: "Maintenance equipment purchase",
      status: "Rejected",
      forVotes: 620,
      againstVotes: 120,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Fund Proposals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proposals.map((p, idx) => (
          <FundProposalCard
            key={idx}
            title={p.title}
            status={p.status}
            forVotes={p.forVotes}
            againstVotes={p.againstVotes}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/funds/2/proposals"
          className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
        >
          View All Proposals →
        </a>
      </div>
    </section>
  );
}
