# 🚀 إعداد النشر التلقائي إلى Cloudflare Pages

## 📋 المتطلبات:

### 1. **Cloudflare API Token:**
- اذهب إلى [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
- انقر على "Create Token"
- اختر "Custom token"
- أضف الأذونات التالية:
  - `Account:Cloudflare Pages:Edit`
  - `Zone:Zone:Read`
- انسخ الـ Token

### 2. **Cloudflare Account ID:**
- في Cloudflare Dashboard، انظر إلى الجانب الأيمن
- ستجد "Account ID" في أسفل القائمة

### 3. **Cloudflare Pages Project:**
- تأكد من إنشاء مشروع Pages باسم `we1`

## ⚙️ إعداد GitHub Secrets:

### 1. **اذهب إلى GitHub Repository:**
- Settings → Secrets and variables → Actions

### 2. **أضف الأسرار التالية:**
```
CLOUDFLARE_API_TOKEN = your_api_token_here
CLOUDFLARE_ACCOUNT_ID = your_account_id_here
```

## 🔄 كيفية العمل:

### **النشر التلقائي:**
- كل مرة تدفع إلى `main` branch
- GitHub Actions سيقوم تلقائياً بـ:
  1. تثبيت التبعيات
  2. بناء التطبيق
  3. النشر إلى Cloudflare Pages

### **النشر اليدوي:**
- يمكنك أيضاً تشغيل النشر يدوياً من:
  - Actions tab → Auto Deploy to Cloudflare Pages → Run workflow

## 📁 الملفات المطلوبة:

- `.github/workflows/auto-deploy.yml` ✅ (تم إنشاؤه)
- `apps/we-dev-next/next.config.mjs` ✅ (تم إصلاحه)
- `apps/we-dev-next/src/app/page.tsx` ✅ (تم تبسيطه)
- `apps/we-dev-next/src/app/globals.css` ✅ (تم تبسيطه)

## 🎯 النتيجة:

بمجرد إعداد الأسرار، كل push إلى main سيؤدي إلى:
- ✅ بناء تلقائي
- ✅ نشر تلقائي
- ✅ تحديث الموقع مباشرة

## 🆘 في حالة المشاكل:

1. **تحقق من GitHub Actions:**
   - Actions tab → Auto Deploy to Cloudflare Pages

2. **تحقق من Cloudflare Pages:**
   - Dashboard → Pages → we1

3. **تحقق من الأسرار:**
   - Settings → Secrets → Actions

---

**🎉 الآن كل شيء سيعمل تلقائياً!**