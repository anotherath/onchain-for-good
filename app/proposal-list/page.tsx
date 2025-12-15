import BackButton from "@/components/buttons/back-button";
import DonationCard from "@/components/fund-detail-components/donation-card";
import FundInfomation from "@/components/fund-detail-components/fund-infomation";
import FundProposalList from "@/components/fund-detail-components/fund-proposal-list";
import TopDonorsTable from "@/components/fund-detail-components/top-donors-table";
import TransactionHistoryTable from "@/components/fund-detail-components/transaction-history-table";

export default function ProposalList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <BackButton className="mb-8" />
      <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FundInfomation />
        </div>
        <div>
          <div className="sticky top-24">
            <DonationCard />
          </div>
        </div>
      </div>
      <FundProposalList />
    </div>
  );
}
