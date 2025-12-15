import { shorten } from "@/utils/format";

type TransactionType = "in" | "out";

type Transaction = {
  type: TransactionType;
  from: string; // FULL address
  to: string; // FULL address
  amount: number | string;
  time: string;
  tx: string; // FULL tx hash
};

type TransactionHistoryTableProps = {
  title?: string;
  transactions: Transaction[];
  currency?: string;
  explorerBaseUrl?: string;
};

const columns = [
  { key: "time", label: "Time", align: "left" },
  { key: "type", label: "Type", align: "center" },
  { key: "from", label: "From", align: "right" },
  { key: "to", label: "To", align: "right" },
  { key: "amount", label: "Amount", align: "center" },
  { key: "tx", label: "Tx", align: "right" },
];

export default function TransactionHistoryTable({
  title = "Transaction History",
  transactions,
  currency = "$",
  explorerBaseUrl = "https://etherscan.io",
}: TransactionHistoryTableProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="bg-white rounded-2xl border  border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`px-4 py-3 text-${c.align} text-xs font-semibold`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={tx.tx + index}
                  className="h-[45px] border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  {/* Time */}
                  <td className="px-4 h-[45px] align-middle text-left text-xs text-gray-500 whitespace-nowrap">
                    {tx.time}
                  </td>

                  {/* Type */}
                  <td className="px-4 h-[45px] align-middle text-center">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        tx.type === "in"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {tx.type.toUpperCase()}
                    </span>
                  </td>

                  {/* From */}
                  <td className="px-4 h-[45px] align-middle text-right font-mono text-xs">
                    <a
                      href={`${explorerBaseUrl}/address/${tx.from}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      title={tx.from}
                    >
                      {shorten(tx.from)}
                    </a>
                  </td>

                  {/* To */}
                  <td className="px-4 h-[45px] align-middle text-right font-mono text-xs">
                    <a
                      href={`${explorerBaseUrl}/address/${tx.to}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      title={tx.to}
                    >
                      {shorten(tx.to)}
                    </a>
                  </td>

                  {/* Amount */}
                  <td className="px-4 h-[45px] align-middle text-center text-xs font-semibold">
                    {currency}
                    {tx.amount}
                  </td>

                  {/* Tx */}
                  <td className="px-4 h-[45px] align-middle text-right font-mono text-xs">
                    <a
                      href={`${explorerBaseUrl}/tx/${tx.tx}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      title={tx.tx}
                    >
                      {shorten(tx.tx, 10, 6)}
                    </a>
                  </td>
                </tr>
              ))}

              {transactions.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-xs text-gray-400"
                  >
                    No transactions
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
