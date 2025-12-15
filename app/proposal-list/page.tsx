import BackButton from "@/components/buttons/back-button";
import AllProposals from "@/components/proposal-list-components/all-proposals";
import FundProposalInfo from "@/components/proposal-list-components/fund-proposal-info";

export default function ProposalList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <BackButton className="mb-8" />

      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          All Funds
        </h1>
        <p className="text-gray-600 mt-2">
          Explore all active charitable funds and support causes you believe in
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <div className="sticky top-24">
            <FundProposalInfo />
          </div>
        </div>
        <div className="lg:col-span-2">
          <AllProposals />
        </div>
      </div>
    </div>
  );
}
