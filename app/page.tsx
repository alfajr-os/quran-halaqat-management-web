import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Shield, Link as LinkIcon, ArrowRight, Code2 } from 'lucide-react';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans dir-rtl text-right">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-24 pb-32 flex flex-col items-center text-center px-4">
          <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm text-emerald-800 mb-8 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 ml-2"></span>
            نظام مؤسسي مفتوح المصدر
          </div>
          
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl/tight mb-6">
            البنية الرقمية المتكاملة لإدارة <br className="hidden sm:block" />
            <span className="text-emerald-600">
              المساجد وحلقات القرآن
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed">
            منصة مبنية بمعمارية حديثة تتيح إدارة المؤسسات التعليمية، متابعة مسارات الحفظ، وتنظيم الأنشطة بأدوات احترافية وهيكلية تدعم إدارة فروع ومساجد متعددة.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 h-12 px-8 shadow-md" asChild>
              <Link href="/onboarding">
                تأسيس النظام <ArrowRight className="mr-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 border-slate-300 text-slate-700 hover:bg-slate-100" asChild>
              <Link href="https://github.com/your-repo" target="_blank">
                <Code2 className="ml-2 h-4 w-4" /> تصفح الكود المصدري
              </Link>
            </Button>
          </div>
        </section>

        {/* Technical Features Section */}
        <section id="features" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">معمارية متقدمة لبيئة متعددة المهام</h2>
              <p className="text-slate-600 text-lg">
                تم تصميم النظام هندسياً ليفصل البيانات بشكل منطقي مع الحفاظ على مرونة الوصول عبر الحسابات المركزية.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-emerald-200 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">الأدوار السياقية المركزية</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  نظام إدارة هويات يتيح للمستخدم امتلاك أدوار وصلاحيات مختلفة (معلم، ولي أمر، مدير) في مساجد متعددة عبر حساب موحد.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-emerald-200 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <LinkIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">نظام الدعوات الذكي</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  دعوة الطلاب والمعلمين تتم عبر روابط مشفرة آمنة (Tokens) محددة الصلاحية وعدد الاستخدامات، مما يسهل الإعداد السريع للبيئة.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:border-emerald-200 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">عزل بيانات المستأجرين</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  قاعدة بيانات تعتمد نمط Multi-Tenancy يضمن الاستقلالية المنطقية التامة لكل مسجد، مع حماية كاملة للسجلات والأنشطة.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-600" />
                <span className="font-semibold text-slate-900">مِحراب</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-600">
                منصة مفتوحة المصدر لإدارة المساجد وحلقات القرآن، مصممة لتسهيل العمل المؤسسي وتنظيم المهام اليومية بمرونة ووضوح.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">
                روابط سريعة
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="#features" className="hover:text-emerald-600 transition-colors">
                    البنية التقنية
                  </Link>
                </li>
                <li>
                  <Link href="#education" className="hover:text-emerald-600 transition-colors">
                    النظام التعليمي
                  </Link>
                </li>
                <li>
                  <Link href="#open-source" className="hover:text-emerald-600 transition-colors">
                    المساهمة والمجتمع
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4">
                الموارد
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="/register" className="hover:text-emerald-600 transition-colors">
                    إنشاء حساب جديد
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-emerald-600 transition-colors">
                    تسجيل الدخول
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/your-repo" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors">
                    المستودع على GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 مِحراب. جميع الحقوق محفوظة.</p>
            <p>مرخّص بموجب MIT ومصمم لخدمة العمل الوقفي والتعليم القرآني.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}