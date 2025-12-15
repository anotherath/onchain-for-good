import RoundedButton from "@/components/buttons/rounded-button";
import FundCard from "@/components/cards/fund-card";
import Image from "next/image";

export default function FundList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          All Funds
        </h1>
        <p className="text-gray-600 mt-2">
          Explore all active charitable funds and support causes you believe in
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

      <div className="flex justify-center">
        <RoundedButton>Show More Funds</RoundedButton>
      </div>
    </div>
  );
}
