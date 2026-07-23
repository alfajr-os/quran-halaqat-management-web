import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

type NavbarProps = {
  compact?: boolean;
  className?: string;
};

export function Navbar({ compact = false, className }: NavbarProps) {
  if (compact) {
    return (
      <header
        className={[
          'sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              مِحراب <span className="text-sm font-normal text-slate-500">لإدارة المساجد</span>
            </span>
          </Link>

          <Button variant="ghost" asChild className="text-slate-600 font-medium">
            <Link href="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </header>
    );
  }

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-emerald-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            مِحراب <span className="text-sm font-normal text-slate-500">لإدارة المساجد</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="#features" className="transition-colors hover:text-emerald-600">
            البنية التقنية
          </Link>
          <Link href="#education" className="transition-colors hover:text-emerald-600">
            النظام التعليمي
          </Link>
          <Link href="#open-source" className="transition-colors hover:text-emerald-600">
            المساهمة والمجتمع
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="hidden md:inline-flex text-slate-600 font-medium">
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild className="bg-emerald-600 font-medium text-white shadow-sm hover:bg-emerald-700">
            <Link href="/register">إنشاء مساحة عمل</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
