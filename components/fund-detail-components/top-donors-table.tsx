import { shorten } from "@/utils/format";

type Donor = {
  address: string;
  amount: number | string;
};

type TopDonorsTableProps = {
  title?: string;
  donors: Donor[];
  currency?: string;
  explorerBaseUrl?: string;
};

export default function TopDonorsTable({
  title = "Top Donors",
  donors,
  currency = "$",
  explorerBaseUrl = "https://etherscan.io",
}: TopDonorsTableProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">
                  Address
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-900">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {donors.map((donor, index) => (
                <tr
                  key={donor.address}
                  className="h-[45px] border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 h-[45px] align-middle text-xs font-semibold text-gray-900">
                    #{index + 1}
                  </td>

                  <td className="px-4 h-[45px] align-middle text-xs text-gray-600 font-mono truncate max-w-40">
                    <a
                      href={`${explorerBaseUrl}/address/${donor.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      title={donor.address}
                    >
                      {shorten(donor.address)}
                    </a>
                  </td>

                  <td className="px-4 h-[45px] align-middle text-xs font-semibold text-gray-900 text-right">
                    {currency}
                    {donor.amount}
                  </td>
                </tr>
              ))}

              {donors.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-xs text-gray-400"
                  >
                    No data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
