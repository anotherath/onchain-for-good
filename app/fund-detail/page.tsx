import DonationCard from "@/components/fund-detail-components/donation-card";
import FundInfomation from "@/components/fund-detail-components/fund-infomation";
import FundProposalList from "@/components/fund-detail-components/fund-proposal-list";
import TopDonorsTable from "@/components/fund-detail-components/top-donors-table";
import TransactionHistoryTable from "@/components/fund-detail-components/transaction-history-table";

export default function FundDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
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
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <TransactionHistoryTable
            transactions={[
              {
                type: "in",
                from: "0xaaa333333111",
                to: "0xbbb333333222",
                amount: 1200,
                time: "2 mins ago",
                tx: "0xabc123456789",
              },
              {
                type: "out",
                from: "0xccc333333333",
                to: "0xddd333333444",
                amount: 800,
                time: "10 mins ago",
                tx: "0xdef987654321def987654321",
              },
              {
                type: "in",
                from: "0xaaa333333111",
                to: "0xbbb333333222",
                amount: 1200,
                time: "2 mins ago",
                tx: "0xabc123456789",
              },
              {
                type: "out",
                from: "0xccc333333333",
                to: "0xddd333333444",
                amount: 800,
                time: "10 mins ago",
                tx: "0xdef987654321def987654321",
              },
              {
                type: "in",
                from: "0xaaa333333111",
                to: "0xbbb333333222",
                amount: 1200,
                time: "2 mins ago",
                tx: "0xabc123456789",
              },
              {
                type: "out",
                from: "0xccc333333333",
                to: "0xddd333333444",
                amount: 800,
                time: "10 mins ago",
                tx: "0xdef987654321def987654321",
              },
              {
                type: "in",
                from: "0xaaa333333111",
                to: "0xbbb333333222",
                amount: 1200,
                time: "2 mins ago",
                tx: "0xabc123456789",
              },
              {
                type: "out",
                from: "0xccc333333333",
                to: "0xddd333333444",
                amount: 800,
                time: "10 mins ago",
                tx: "0xdef987654321def987654321",
              },
              {
                type: "in",
                from: "0xaaa333333111",
                to: "0xbbb333333222",
                amount: 1200,
                time: "2 mins ago",
                tx: "0xabc123456789",
              },
              {
                type: "out",
                from: "0xccc333333333",
                to: "0xddd333333444",
                amount: 800,
                time: "10 mins ago",
                tx: "0xdef987654321def987654321",
              },
            ]}
          />
        </div>
        <div className="col-span-1">
          <TopDonorsTable
            donors={[
              { address: "0x1234...56781", amount: 5000 },
              { address: "0x2345...67892", amount: 4500 },
              { address: "0x3456...78903", amount: 4000 },
              { address: "0x1234...56784", amount: 5000 },
              { address: "0x2345...67895", amount: 4500 },
              { address: "0x3456...78906", amount: 4000 },
              { address: "0x1234...56787", amount: 5000 },
              { address: "0x2345...67898", amount: 4500 },
              { address: "0x3456...78909", amount: 4000 },
              { address: "0x3456...78900", amount: 4000 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
