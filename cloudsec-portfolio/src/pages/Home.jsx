export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-white">
      <h1 className="text-5xl font-bold text-accent mb-4">Gift Mofokeng</h1>
      <p className="text-lg text-gray-400 mb-8">
        Cloud Security Portfolio – Showcasing my 10-week bootcamp journey
      </p>
      <div className="space-x-4">
        <a href="/progress" className="bg-accent text-dark px-6 py-3 rounded-lg hover:opacity-90">View Progress</a>
        <a href="/about" className="border border-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-dark">About Me</a>
      </div>
    </div>
  )
}
