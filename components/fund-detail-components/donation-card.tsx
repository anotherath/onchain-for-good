export default function DonationCard() {
  return (
    <div className="bg-white h-fit rounded-2xl border border-gray-100 p-6 shadow-xs">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Support This Fund
      </h2>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-medium text-green-600">45%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: "45%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          <span className="font-semibold text-gray-900">$45,000</span>
          {" raised of "}
          <span className="font-semibold text-gray-900">$100,000</span>
        </p>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Donation Amount (ETH)
        </label>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="0.00"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          value=""
        />
      </div>
      <button
        disabled={false}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Donate Now
      </button>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          You will receive:
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Points for voting on proposals
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Governance tokens (guETH)
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Ability to mint exclusive NFTs
          </li>
        </ul>
      </div>
    </div>
  );
}
