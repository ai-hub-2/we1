# 🔧 حل مشاكل النشر

## المشكلة الحالية
النشر لا يعمل على Cloudflare Pages

## الحلول المتاحة

### الحل الأول: استخدام Vercel (الأسهل)
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

### الحل الثاني: استخدام Netlify
1. اذهب إلى https://netlify.com
2. سجل دخول بحساب GitHub
3. اضغط "New site from Git"
4. اختر repository: `ai-hub-2/we1`
5. اضبط الإعدادات:
   - **Base directory**: `apps/we-dev-next`
   - **Build command**: `pnpm build`
   - **Publish directory**: `.next`
6. اضغط "Deploy site"

### الحل الثالث: إصلاح Cloudflare Pages

#### الخطوة 1: إنشاء مشروع Cloudflare Pages
1. اذهب إلى https://dash.cloudflare.com/pages
2. اضغط "Create a project"
3. اختر "Connect to Git"
4. اختر repository: `ai-hub-2/we1`

#### الخطوة 2: إعداد البناء
- **Project name**: `we-dev`
- **Production branch**: `main`
- **Framework preset**: `Next.js`
- **Build command**: `cd apps/we-dev-next && pnpm install && pnpm build`
- **Build output directory**: `apps/we-dev-next/.next`
- **Root directory**: `/` (اتركه فارغاً)

#### الخطوة 3: إضافة متغيرات البيئة
- `NEXT_PUBLIC_APP_NAME`: `we-dev`

#### الخطوة 4: إضافة GitHub Secrets
اذهب إلى: https://github.com/ai-hub-2/we1/settings/secrets/actions

أضف هذه الأسرار:
1. **CLOUDFLARE_API_TOKEN**
   - اذهب إلى: https://dash.cloudflare.com/profile/api-tokens
   - اضغط "Create Token"
   - اختر "Custom token"
   - أضف الصلاحيات:
     - Zone:Zone:Read (All zones)
     - Zone:Zone Settings:Read (All zones)
     - Account:Cloudflare Pages:Edit (Your account)

2. **CLOUDFLARE_ACCOUNT_ID**
   - اذهب إلى: https://dash.cloudflare.com/profile/api-tokens
   - ابحث عن "Global API Key"
   - انسخ Account ID

## اختبار الحلول

### اختبار البناء المحلي
```bash
cd apps/we-dev-next
pnpm install
pnpm build
```

### مراقبة GitHub Actions
اذهب إلى: https://github.com/ai-hub-2/we1/actions

### مراقبة النشر
- **Vercel**: https://vercel.com/dashboard
- **Netlify**: https://app.netlify.com
- **Cloudflare**: https://dash.cloudflare.com/pages

## المشاكل الشائعة وحلولها

### مشكلة 1: فشل في البناء
**الحل**: تأكد من أن جميع التبعيات مثبتة
```bash
cd apps/we-dev-next
pnpm install
```

### مشكلة 2: خطأ في Node.js version
**الحل**: تأكد من استخدام Node.js 18+
```bash
node --version
```

### مشكلة 3: خطأ في pnpm
**الحل**: تأكد من تثبيت pnpm
```bash
npm install -g pnpm
```

### مشكلة 4: خطأ في GitHub Secrets
**الحل**: تأكد من إضافة جميع الأسرار المطلوبة

## الخيار الأسرع
**استخدم Vercel** - إنه الأسهل والأسرع في الإعداد!

## الدعم
إذا استمرت المشكلة:
1. تحقق من سجلات GitHub Actions
2. تحقق من سجلات النشر
3. تأكد من صحة الإعدادات