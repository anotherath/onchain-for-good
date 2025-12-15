import RoundedButton from "../buttons/rounded-button";
import TextButton from "../buttons/text-button";
import FundProposalCard from "../cards/fund-proposal-card";

export default function AllProposals() {
  const proposals = [
    {
      title: "Community water safety training program",
      status: "Open",
      forVotes: 850,
      againstVotes: 200,
    },
    {
      title: "Community water safety training program",
      status: "Open",
      forVotes: 850,
      againstVotes: 200,
    },
    {
      title: "Install 5 new wells in village A",
      status: "Approved",
      forVotes: 1250,
      againstVotes: 50,
    },
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 gap-6">
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
        <RoundedButton>Show more</RoundedButton>{" "}
      </div>
    </section>
  );
}
