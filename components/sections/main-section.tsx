import RoundedLinkButton from "../buttons/rounded-link-button";

export default function MainSection() {
  return (
    <section className="bg-linear-to-br from-white to-green-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Onchain for Good – Donate with Transparency and Trust
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join a movement of Web3 donors supporting charitable causes with
            complete transparency. Donate on blockchain, receive governance
            tokens, mint NFTs, and vote on fund proposals that matter to you.
          </p>
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-8">
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">
                24
              </div>
              <p className="text-sm lg:text-base text-gray-600">Active Funds</p>
            </div>
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">
                $2.5M
              </div>
              <p className="text-sm lg:text-base text-gray-600">
                Donations Received
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">
                15.2K
              </div>
              <p className="text-sm lg:text-base text-gray-600">
                Active Donors
              </p>
            </div>
          </div>
          <RoundedLinkButton href="/all-fund" size="big">
            Explore Funds
          </RoundedLinkButton>
        </div>
      </div>
    </section>
  );
}
