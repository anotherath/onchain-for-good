import FundCard from "../cards/fund-card";

export default function ActiveFundsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Active Funds
          </h2>
          <p className="text-gray-600 mt-2">
            Support causes that matter and make a real impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FundCard
            title="Clean Water for African Villages"
            description="Providing clean drinking water access to rural communities across sub-Saharan Africa."
            progress={45}
            raised={45000}
            goal={100000}
            href="/funds/1"
          />
          <FundCard
            title="Education for Underprivileged Children"
            description="Supporting educational initiatives and scholarships for children in developing regions."
            progress={45}
            raised={67500}
            goal={150000}
            href="/funds/2"
          />
          <FundCard
            title="Medical Relief Fund"
            description="Emergency medical aid and healthcare services for communities in crisis zones."
            progress={40}
            raised={32000}
            goal={80000}
            href="/funds/3"
          />
          <FundCard
            title="Clean Water for African Villages"
            description="Providing clean drinking water access to rural communities across sub-Saharan Africa."
            progress={45}
            raised={45000}
            goal={100000}
            href="/funds/1"
          />
          <FundCard
            title="Education for Underprivileged Children"
            description="Supporting educational initiatives and scholarships for children in developing regions."
            progress={45}
            raised={67500}
            goal={150000}
            href="/funds/2"
          />
          <FundCard
            title="Medical Relief Fund"
            description="Emergency medical aid and healthcare services for communities in crisis zones."
            progress={40}
            raised={32000}
            goal={80000}
            href="/funds/3"
          />
        </div>
        <div className="text-center mt-12">
          <a
            className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
            href="/funds"
          >
            View all funds →
          </a>
        </div>
      </div>
    </section>
  );
}
