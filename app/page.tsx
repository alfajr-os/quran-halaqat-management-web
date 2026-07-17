// src/app/(marketing)/page.tsx
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* الهيدر */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-amber-600">
        <span className="font-bold text-xl">إتقان | Itqan</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline" href="#features">المميزات</Link>
          <Link href="/login">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              دخول النظام
            </button>
          </Link>
        </nav>
      </header>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 bg-gray-900">
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            منصة إتقان لإدارة المساجد
          </h1>
          <p className="mt-4 text-gray-500 max-w-[700px] text-lg">
            نظام متكامل، آمن، ومفتوح المصدر لرقمنة إدارة المساجد وحلقات تحفيظ القرآن الكريم.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md">
              ابدأ الآن
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}