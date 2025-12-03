export default function FundInfomation() {
  return (
    <>
      <div className="w-full h-96 bg-linear-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center overflow-hidden mb-8 border border-gray-100">
        <div className="text-center">
          <svg
            className="w-24 h-24 text-green-300 mx-auto mb-4"
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
          <span className="text-green-400 font-medium">Fund Image</span>
        </div>
      </div>
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Clean Water for African Villages
      </h1>
      <p className="text-gray-600 text-lg mb-6">
        Providing clean drinking water access to rural communities across
        sub-Saharan Africa through infrastructure development and community
        education.
      </p>
      <div className="mb-8">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Active
        </span>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          About This Fund
        </h2>
        <p className="text-gray-600">
          This initiative focuses on building sustainable water infrastructure
          in underserved regions. Our team works with local communities to
          install wells, filtration systems, and maintenance programs. By 2025,
          we aim to provide clean water access to 50,000+ people.
        </p>
      </div>
    </>
  );
}
