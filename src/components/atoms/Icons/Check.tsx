import React from 'react'

// __________
//
type CheckProps = {
  strokeWidth?: number
}

// __________
//
export const Check: React.VFC<CheckProps> = ({ strokeWidth }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth || 2}
      d="M5 13l4 4L19 7"
    />
  </svg>
)
