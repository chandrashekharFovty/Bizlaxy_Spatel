import React from 'react'

function cUSTOMtARGET() {
  return (
    <div>
     <div className="max-w-[1100px] mx-auto p-6 bg-white rounded-xl shadow">
  <h2 className="text-xl font-semibold mb-4">Custom Targeting</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <select className="border rounded px-4 py-2">
      <option>Select Business Type</option>
      {/* Add options */}
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Industry</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Business Model</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Geographic Location</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Age Group</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Gender</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Language</option>
    </select>
    <select className="border rounded px-4 py-2">
      <option>Select Education</option>
    </select>
  </div>

  <div className="flex justify-end mt-6">
    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
      Continue
    </button>
  </div>
</div> 
    </div>
  )
}

export default cUSTOMtARGET
