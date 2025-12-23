export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-error mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">পেজ খুঁজে পাওয়া যায়নি</h2>
        <p className="text-base-content/70 mb-8">
          আপনি যে পেজ খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে।
        </p>
        <a href="/" className="btn btn-primary">
          হোম পেজে ফিরে যান
        </a>
      </div>
    </div>
  )
}