<div align="center">
  <img src="https://avatars.githubusercontent.com/u/306186684?s=200&v=4" alt="Itqan Web Logo" width="120" height="120" />

  # إتقان - الواجهة الأمامية (Web Client) 💻

  **واجهة مستخدم عصرية، سريعة، وسهلة الوصول لمنصة إتقان لإدارة المساجد.**

  🌐 **العربية** | [English](README.md)

  [![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

---

## 🌟 نظرة عامة
مستودع `itqan-web` هو تطبيق الواجهة الأمامية لمنظومة إتقان. يوفر لوحات تحكم (Dashboards) مخصصة وديناميكية تعتمد على دور المستخدم (الإدارة العليا، مدير المسجد، المعلم، ولي الأمر، والطالب).

تم بناء الواجهة باستخدام **Next.js (App Router)**، مع الاعتماد المكثف على **React Server Components (RSC)** لضمان أداء فائق، تحسين محركات البحث (SEO)، وتقليل حجم جافاسكريبت المرسل للمتصفح.

## 🛠️ التقنيات والبنية المعمارية

نحن نتبع **هيكلية المجلدات القائمة على الميزات (Feature-Based Structure)** لضمان سهولة الصيانة والفصل النظيف للمسؤوليات (Clean Architecture).

- **إطار العمل:** Next.js 14+ (App Router)
- **اللغة:** JavaScript (وضع صارم)
- **التصميم:** Tailwind CSS مع `shadcn/ui` (مطابق لمعايير سهولة الوصول WAI-ARIA)
- **إدارة الحالة وجلب البيانات:** TanStack Query (React Query)
- **النماذج والتحقق:** React Hook Form + Zod
- **تعدد اللغات (i18n):** Next-Intl (دعم كامل للاتجاهين RTL و LTR)

## 🚀 دليل التشغيل السريع

### 🛠️ خيارات بيئة التطوير (Development Environments)

لقد قمنا بتسهيل عملية التطوير والمساهمة في منصة إتقان لتناسب جميع التخصصات:

*   **المساهمة في الواجهة الأمامية فقط (Frontend Contributors):**
    إذا كنت ترغب في العمل على تطوير الواجهة الأمامية (`itqan-web`) فقط، **فلا داعي لتثبيت الواجهة الخلفية أو قاعدة البيانات على جهازك**. نحن نوفر نسخة حية ومستضافة تجريبياً (Staging API) تعمل بشكل مستمر. كل ما عليك فعله هو ربط تطبيقك المحلي بها عبر ملف `.env.local` كالتالي:
    ```env
    NEXT_PUBLIC_API_URL=https://api-staging.itqan-os.org/v1
    ```

*   **التشغيل الكامل للنظام (Full-Stack Deployment & Production):**
    إذا كنت ترغب في الاستفادة من المشروع بشكل كلي، أو تطوير ميزات تربط بين الواجهة الأمامية والخلفية، أو تشغيل المنصة بشكل كامل ؛ فيجب عليك استنساخ وتشغيل مستودع الواجهة الخلفية ([`itqan-api`](https://github.com/itqan-platform/itqan-api.git)) محلياً باستخدام Docker و PostgreSQL لربطه بالواجهة الأمامية وتفعيل النظام بشكل متكامل.

### المتطلبات الأساسية
- **Node.js**: إصدار 18.17.0 فما فوق.

### خطوات التثبيت
1. انسخ المستودع لجهازك:
   ```bash
   git clone https://github.com/itqan-platform/itqan-web.git
   cd itqan-web
   ```
2. ثبّت الحزم والاعتماديات:
    ```bash
    npm install
    ```
2. قم بإعداد متغيرات البيئة:
   ```bash
   cp .env.example .env.local
   ```
   تأكد من تعديل `NEXT_PUBLIC_API_URL` ليرتبط بخادم `itqan-api` المحلي الخاص بك.
3. شغّل خادم التطوير:
   ```bash
   npm run dev
   ```
   افتح الرابط `http://localhost:3000` في متصفحك.

## 🤝 المساهمة
هذا المشروع مفتوح المصدر، ونرحب بمساهماتكم! إذا كنت ترغب في المساهمة، يرجى اتباع الخطوات الموضحة في  ([contributing](https://github.com/itqan-os/.github?tab=contributing-ov-file#))