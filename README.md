# Inner Shelter · 内在家园

神经友好（neuro-friendly）的个人疗愈 PWA + iOS 应用，面向长期慢性压力与复杂性创伤（C-PTSD）相关体验。

- **线上 PWA / API：** [inner-shelter-ios.vercel.app](https://inner-shelter-ios.vercel.app)
- **源码仓库：** [github.com/hanbing6228/inner-space](https://github.com/hanbing6228/inner-space)

## 仓库结构

```
web/              # PWA 源码（HTML/CSS/JS + 呼吸引导音频）
api/inner-shelter # Vercel Serverless（Gemini AI 代理）
ios/              # Capacitor Xcode 工程
scripts/          # sync-www、呼吸音频生成、API 部署
www/ public/      # 构建输出（npm run sync，勿手改）
```

## 快速开始

```bash
npm install
npm run sync          # web/ → www/ + public/
npm run ios           # 同步并打开 Xcode（需 Xcode 15.2+）
```

本地 API 开发：复制 `config.example.js` 为 `config.local.js`，设置 `INNER_SHELTER_API`。

Vercel 部署：连接本仓库，设置环境变量 `GEMINI_API_KEY`（[Google AI Studio](https://aistudio.google.com/apikey)）。

## 文档

| 文件 | 说明 |
|------|------|
| [IOS-BUILD.md](./IOS-BUILD.md) | iOS 构建与 Capacitor |
| [APP-STORE.md](./APP-STORE.md) | App Store 上架文案 |
| [SIGNING.md](./SIGNING.md) | 证书与签名 |
| [web/privacy.html](./web/privacy.html) | 隐私政策 |

## 联系

hanbing6228@gmail.com
