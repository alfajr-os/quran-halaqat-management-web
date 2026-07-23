import Link from 'next/link';
import { AlertTriangle, ArrowRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 dir-rtl text-right flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
            <AlertTriangle className="h-8 w-8" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            الصفحة غير موجودة
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
            يبدو أن الرابط الذي فتحته غير صحيح أو أن الصفحة تم نقلها أو حذفها.
            يمكنك العودة إلى الصفحة الرئيسية أو تسجيل الدخول للمتابعة.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm">
              <Link href="/">
                <Home className="ml-2 h-4 w-4" />
                العودة للرئيسية
              </Link>
            </Button>

            <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
              <Link href="/login">
                تسجيل الدخول
                <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
