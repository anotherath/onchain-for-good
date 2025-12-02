import React from "react";

interface FundCardProps {
  title: string;
  description: string;
  progress: number; // 0-100
  raised: number;
  goal: number;
  href: string;
}

export default function FundCard({
  title,
  description,
  progress,
  raised,
  goal,
  href,
}: FundCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* Fund image placeholder */}
      <div className="w-full h-48 bg-linear-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <svg
            className="w-16 h-16 text-green-300 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm text-green-400">Fund Image</span>
        </div>
      </div>

      {/* Fund info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-600">Progress</span>
            <span className="text-xs font-medium text-green-600">
              {progress}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Raised / Goal */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">
              ${raised.toLocaleString()}
            </span>{" "}
            raised of{" "}
            <span className="font-semibold text-gray-900">
              ${goal.toLocaleString()}
            </span>{" "}
            goal
          </p>
        </div>

        {/* View Fund button */}
        <a
          className="block w-full bg-green-600 text-white text-center py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
          href={href}
        >
          View Fund
        </a>
      </div>
    </div>
  );
}
