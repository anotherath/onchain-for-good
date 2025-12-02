export default function ActiveFundsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Active Funds
          </h2>
          <p className="text-gray-600 mt-2">
            Support causes that matter and make a real impact
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Clean Water for African Villages
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Providing clean drinking water access to rural communities
                across sub-Saharan Africa.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    45%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$45,000</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$100,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/1"
              >
                View Fund
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Education for Underprivileged Children
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Supporting educational initiatives and scholarships for children
                in developing regions.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    45%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$67,500</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$150,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/2"
              >
                View Fund
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Medical Relief Fund
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Emergency medical aid and healthcare services for communities in
                crisis zones.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    40%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$32,000</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$80,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/3"
              >
                View Fund
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Reforestation Initiative
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Planting trees and restoring forests to combat climate change
                and support biodiversity.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    48%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "48.3333%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$58,000</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$120,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/4"
              >
                View Fund
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Hunger Relief Program
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Food security and nutrition programs for vulnerable populations
                worldwide.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    52%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "52.1429%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$73,000</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$140,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/5"
              >
                View Fund
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
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
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                Disaster Recovery Fund
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Supporting communities affected by natural disasters with
                immediate relief.
              </p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-green-600">
                    46%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-300"
                    style={{ width: "45.5556%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">$41,000</span>{" "}
                  raised of{" "}
                  <span className="font-semibold text-gray-900">$90,000</span>{" "}
                  goal
                </p>
              </div>
              <a
                className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                href="/funds/6"
              >
                View Fund
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            className="inline-block text-green-600 font-semibold hover:text-green-700 transition-colors"
            href="/funds"
          >
            View all funds →
          </a>
        </div>
      </div>
    </section>
  );
}
