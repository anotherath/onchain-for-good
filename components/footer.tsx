export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Onchain For Good
            </h3>
            <p className="text-gray-600 text-sm">
              Transparent Web3 donations platform for charitable giving with
              blockchain verification.
            </p>
          </div>
          <div className="flex justify-start md:justify-end gap-8">
            <div className="flex flex-row gap-3">
              <a
                className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors"
                href="/"
              >
                Home
              </a>
              <a
                className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors"
                href="/all-funds"
              >
                Funds
              </a>
              <a
                className="text-gray-600 hover:text-green-600 text-sm font-medium transition-colors"
                href="/nft"
              >
                NFT
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-xs text-center">
            © 2025 Onchain For Good. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
