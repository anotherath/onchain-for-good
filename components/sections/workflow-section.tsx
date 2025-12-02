export default function WorkflowSection() {
  return (
    <section className="py-16 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A transparent, trustworthy process from donation to impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <span className="text-lg font-bold text-green-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Connect Wallet
            </h3>
            <p className="text-gray-600 text-sm">
              Link your Web3 wallet to get started
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <span className="text-lg font-bold text-green-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Choose Fund
            </h3>
            <p className="text-gray-600 text-sm">
              Select a cause you believe in
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <span className="text-lg font-bold text-green-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Donate &amp; Earn
            </h3>
            <p className="text-gray-600 text-sm">
              Receive governance tokens for your contribution
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <span className="text-lg font-bold text-green-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Vote &amp; Mint
            </h3>
            <p className="text-gray-600 text-sm">
              Vote on proposals and mint exclusive NFTs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
