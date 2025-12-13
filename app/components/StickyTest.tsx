"use client"

export default function StickyTest() {
  return (
    <div className="bg-purple-100">
      <div className="h-screen bg-red-300 flex items-center justify-center">
        <h1 className="text-4xl">Scroll Down</h1>
      </div>

      <div className="h-screen bg-blue-300 relative">
        <div className="sticky top-0 bg-green-500 p-8 text-white text-2xl">
          I AM STICKY - I should stay at the top!
        </div>
        <div className="p-8">
          <p>Scroll more...</p>
        </div>
      </div>

      <div className="h-screen bg-yellow-300 flex items-center justify-center">
        <h1 className="text-4xl">Keep scrolling</h1>
      </div>

      <div className="h-screen bg-pink-300 flex items-center justify-center">
        <h1 className="text-4xl">End</h1>
      </div>
    </div>
  )
}
