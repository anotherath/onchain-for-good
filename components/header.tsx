import RoundedButton from "./buttons/rounded-button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="shrink-0" href="/">
            <div className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors">
              Onchain For Good
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-gray-700 hover:text-gray-600 font-medium transition-colors"
              href="/"
            >
              Home
            </a>
            <a
              className="text-gray-700 hover:text-gray-600 font-medium transition-colors"
              href="/all-funds"
            >
              Funds
            </a>
            <a
              className="text-gray-700 hover:text-gray-600 font-medium transition-colors"
              href="/marketplace"
            >
              NFT
            </a>
          </nav>
          <div className="shrink-0">
            <RoundedButton>Connect Wallet</RoundedButton>
          </div>
        </div>
      </div>
    </header>
  );
}
