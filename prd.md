基于\*\*「模块化 + 配置驱动」Next.js 模板系统\*\*，来构建一套可复用、可切换、可扩展的项目骨架。下面是完整的结构建议与初始化方案设计，供你落地使用。

# TODO
[X] GA 代码模块化 


---

## ✅ 核心架构理念：模块化 + 配置驱动

> 每个功能是一个“可拔插”的模块，由以下部分组成：

* 组件：渲染逻辑和 UI
* API：后端服务或处理函数
* 配置：通过 `SITE_CONFIG` 或 `.env` 控制启用状态
* Hook（可选）：封装逻辑复用或监听行为

---

## 🧱 项目目录结构建议

```bash
my-next-template/
├── app/ or pages/                     # 路由结构
├── components/
│   ├── Auth/                          # Google 登录等身份模块
│   ├── GoogleAnalytics.tsx/                     # GA/统计模块
│   ├── SEO/                           # Meta/OG卡片等
│   ├── Upload/                        # R2 图床上传组件
│   ├── UI/                            # 通用 UI 组件
├── lib/
│   ├── config.ts                      # SITE_CONFIG 全局功能开关
│   ├── auth.ts                        # 会话管理封装
│   ├── db.ts                          # D1 初始化与连接
│   ├── r2.ts                          # R2 上传工具
├── pages/
│   ├── api/
│   │   ├── auth/                      # 登录接口
│   │   ├── upload/                    # 图片上传接口
│   ├── terms.tsx                      # 服务条款
│   ├── privacy.tsx                    # 隐私政策
│   ├── 404.tsx
├── public/
│   ├── llm.txt
│   ├── robots.txt
│   ├── favicon.ico
├── locales/                           # 多语言 JSON
│   ├── zh/
│   └── en/
├── styles/
├── .env.local
└── next.config.js
```

---

## 🧩 示例 SITE\_CONFIG 模板（config.ts）

```ts
export const SITE_CONFIG = {
  enableGoogleAuth: false,
  enableAnalytics: true,
  enableR2Upload: false,
  enablePrivacyPolicy: true,
  enableTermsOfService: true,
  enableMultiLanguage: true,
};
```

---

## 📦 示例：Google 登录模块实现方式（封装）

### `components/Auth/LoginButton.tsx`

```tsx
import { SITE_CONFIG } from "@/lib/config";
import { signIn } from "next-auth/react";

export function LoginButton() {
  if (!SITE_CONFIG.enableGoogleAuth) return null;

  return (
    <button onClick={() => signIn("google")}>
      使用 Google 登录
    </button>
  );
}
```

### `pages/api/auth/[...nextauth].ts`

```ts
import { SITE_CONFIG } from "@/lib/config";

if (!SITE_CONFIG.enableGoogleAuth) {
  export default function handler(req, res) {
    res.status(404).json({ error: "Google Auth disabled" });
  };
} else {
  // 真正的 next-auth 配置写这里
}
```

---

## ✅ .env 配置（适配 Cloudflare 与 prod/dev）

```env
NEXT_PUBLIC_ENABLE_GOOGLE_AUTH=false
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_R2_UPLOAD=false
```

在 `lib/config.ts` 中读取：

```ts
export const SITE_CONFIG = {
  enableGoogleAuth: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH === "true",
  ...
};
```

---

## ✅ 未来模块扩展示意

| 模块名       | 组件                | API 路由                | 开关字段                  |
| --------- | ----------------- | --------------------- | --------------------- |
| Google 登录 | `LoginButton.tsx` | `api/auth/[...].ts`   | `enableGoogleAuth`    |
| GA        | `Analytics.tsx`   | —                     | `enableAnalytics`     |
| R2 上传     | `ImageUpload.tsx` | `api/upload/index.ts` | `enableR2Upload`      |
| D1 数据库    | 无 UI              | 数据接入 lib/db.ts        | 控制是否连接                |
| 隐私政策      | `privacy.tsx`     | —                     | `enablePrivacyPolicy` |
| 多语言       | `i18n.ts`         | —                     | `enableMultiLanguage` |

---

## ✅ 接下来可执行的行动建议

1. ✅ 初始化一个仓库结构，是否需要我为你生成完整代码骨架？
2. ✅ 从 GA、404、config.ts 开始，实现第一个基础模块
3. ✅ 按需构建每个模块，并附带 switch 开关
4. ✅ 提供 Vercel + Cloudflare Pages 双部署方案支持

你可以告诉我：

* ✅ 你打算使用 App Router 还是 pages Router？
* ✅ 是否希望我直接输出完整的 `my-next-template` zip 包代码结构？
* ✅ 是否希望我先帮你从 `config.ts + Google 登录` 模块开始写第一个样板？或者 GA ？

只要你定方向，我就可以直接生成代码内容，帮你落地构建第一版 MVP 框架。
