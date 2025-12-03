import React from "react";

interface ProposalCardProps {
  title: string;
  status: "Approved" | "Open" | "Rejected" | string;
  forVotes: number;
  againstVotes: number;
  statusColor?: string; // optional, tự set màu nếu muốn
}

export default function FundProposalCard({
  title,
  status,
  forVotes,
  againstVotes,
  statusColor,
}: ProposalCardProps) {
  // Default colors theo status
  const statusClasses = {
    Approved: "bg-green-100 text-green-700",
    Open: "bg-blue-100 text-blue-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const colorClass =
    statusColor ||
    statusClasses[status as keyof typeof statusClasses] ||
    "bg-gray-100 text-gray-700";

  const totalVotes = forVotes + againstVotes;
  const forPercent = totalVotes ? (forVotes / totalVotes) * 100 : 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-1">
          {title}
        </h3>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}
        >
          {status}
        </span>
      </div>
      <div>
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span>For: {forVotes}</span>
          <span>Against: {againstVotes}</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden flex">
          <div
            className="h-full bg-green-500"
            style={{ width: `${forPercent}%` }}
          ></div>
          <div className="h-full bg-red-500 grow"></div>
        </div>
      </div>
    </div>
  );
}
