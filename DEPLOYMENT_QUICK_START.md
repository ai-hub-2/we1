# 🚀 دليل النشر السريع

## الخيارات المتاحة للنشر

### 1. Vercel (الأسهل والأسرع) ⭐⭐⭐⭐⭐

#### الخطوات:
1. اذهب إلى https://vercel.com
2. سجل دخول بحساب GitHub
3. اضغط "New Project"
4. اختر repository: `ai-hub-2/we1`
5. اضبط الإعدادات:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/we-dev-next`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
6. اضغط "Deploy"

#### المميزات:
- ✅ سهل الإعداد
- ✅ دعم ممتاز لـ Next.js
- ✅ نشر تلقائي
- ✅ مجاني للمشاريع الصغيرة

### 2. Netlify (بديل ممتاز) ⭐⭐⭐⭐

#### الخطوات:
1. اذهب إلى https://netlify.com
2. سجل دخول بحساب GitHub
3. اضغط "New site from Git"
4. اختر repository: `ai-hub-2/we1`
5. اضبط الإعدادات:
   - **Base directory**: `apps/we-dev-next`
   - **Build command**: `pnpm build`
   - **Publish directory**: `.next`
6. اضغط "Deploy site"

#### المميزات:
- ✅ سهل الإعداد
- ✅ دعم جيد لـ Next.js
- ✅ نشر تلقائي
- ✅ مجاني

### 3. Cloudflare Pages (متقدم) ⭐⭐⭐

#### الخطوات:
1. اذهب إلى https://dash.cloudflare.com/pages
2. اضغط "Create a project"
3. اختر "Connect to Git"
4. اختر repository: `ai-hub-2/we1`
5. اضبط الإعدادات:
   - **Project name**: `we-dev`
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `cd apps/we-dev-next && pnpm install && pnpm build`
   - **Build output directory**: `apps/we-dev-next/.next`
6. أضف متغير البيئة: `NEXT_PUBLIC_APP_NAME` = `we-dev`

#### المميزات:
- ✅ أداء ممتاز
- ✅ أمان عالي
- ⚠️ إعداد أكثر تعقيداً

## اختبار النشر

### اختبار البناء المحلي:
```bash
cd apps/we-dev-next
pnpm install
pnpm build
```

### مراقبة النشر:
- **Vercel**: https://vercel.com/dashboard
- **Netlify**: https://app.netlify.com
- **Cloudflare**: https://dash.cloudflare.com/pages

## GitHub Actions

تم إعداد workflows للنشر التلقائي:
- `.github/workflows/build.yml` - اختبار البناء
- `.github/workflows/vercel-deploy.yml` - نشر Vercel
- `.github/workflows/netlify-deploy.yml` - نشر Netlify

## التوصية

**استخدم Vercel** - إنه الأسهل والأسرع والأكثر موثوقية لـ Next.js!

## الدعم

إذا واجهت مشاكل:
1. تحقق من سجلات البناء
2. تأكد من صحة الإعدادات
3. راجع ملف `DEPLOYMENT_TROUBLESHOOTING.md`