export default function FundProposalInfo() {
  const progress = 45;
  const raised = 45_000;
  const target = 100_000;

  return (
    <div className="bg-white h-fit rounded-2xl border border-gray-100 p-6 shadow-xs">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Clean Water for African Villages
        </h2>
      </div>

      <div className="mb-6 w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden rounded-lg">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-300 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span className="text-sm text-green-400">Fund Image</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-semibold text-green-600">
            {progress}%
          </span>
        </div>

        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 text-sm text-gray-600">
          <span className="font-semibold text-gray-900">
            ${raised.toLocaleString()}
          </span>{" "}
          raised of{" "}
          <span className="font-semibold text-gray-900">
            ${target.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl  p-4">
          <div className="text-xs text-gray-500 mb-1">Proposals</div>
          <div className="text-2xl font-bold text-green-600">12</div>
        </div>

        <div className="rounded-xl  p-4">
          <div className="text-xs text-gray-500 mb-1">Status</div>
          <div className="text-sm font-semibold text-green-600">
            Active Fund
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Community governance
        </h3>

        <ul className="space-y-2 text-sm text-gray-600">
          {[
            "Voting power on fund proposals",
            "Transparent on-chain governance",
            "Recognition for social impact",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="mt-1 w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
