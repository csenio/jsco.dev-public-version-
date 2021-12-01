export default function Info({children}) {
  return (
    <div className="p-5 bg-indigo-50 relative text-indigo-600">
      <div className="bg-white p-px rounded-full absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2">
        <svg className="w-6 text-indigo-500 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      {children}
    </div>
  )
}
