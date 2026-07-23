import Link from 'next/link';
import { LockKeyhole, Mail, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';

export const metadata = {
  title: 'تسجيل الدخول | مِحراب',
  description: 'تسجيل الدخول إلى منصة مِحراب لإدارة المساجد وحلقات القرآن.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 dir-rtl text-right flex flex-col">
      <Navbar compact />

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
          <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-emerald-600 to-emerald-700 p-10 text-white">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm/none text-emerald-100">مِحراب</p>
                  <h1 className="text-2xl font-bold">بوابة الإدارة الموحدة</h1>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl font-extrabold leading-tight">
                  تسجيل آمن وسريع للوصول إلى لوحة التحكم.
                </h2>
                <p className="max-w-md text-sm leading-relaxed text-emerald-50/90">
                  ادخل إلى حسابك لإدارة المساجد، متابعة الحلقات، وتنظيم الأنشطة من مكان واحد.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-emerald-50/90">
              “إدارة أسهل، متابعة أوضح، وتجربة مصممة لخدمة العمل الوقفي والتعليم القرآني.”
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-12">
            <div className="mb-8 lg:hidden flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-emerald-600" />
              <span className="text-xl font-bold text-slate-900">مِحراب</span>
            </div>

            <div className="mb-8 space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">مرحبًا بعودتك</h2>
              <p className="text-sm text-slate-600">
                سجّل دخولك للوصول إلى لوحة التحكم الخاصة بك.
              </p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  كلمة المرور
                </label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  تذكرني
                </label>
                <Link href="#" className="font-medium text-emerald-600 hover:text-emerald-700">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <Button className="h-12 w-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm" type="submit">
                تسجيل الدخول
                <ArrowRight className="mr-2 h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              ليس لديك حساب؟{' '}
              <Link href="/register" className="font-medium text-emerald-600 hover:text-emerald-700">
                أنشئ حسابًا جديدًا
              </Link>
            </div>

            <div className="mt-8">
              <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-700">
                العودة إلى الصفحة الرئيسية
              </Link>
            </div>
          </section>
        </div>
      </div>
      </main>
    </div>
  );
}
