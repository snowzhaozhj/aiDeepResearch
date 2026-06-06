# Harness Lab

AI Harness 工具深度研究站点。系统性地分析评估框架、Agent 框架、协议、可观测性平台等工具，帮助技术选型。

## 开发

```bash
npm install
npm run dev       # localhost:4321
npm run build     # 构建到 dist/
```

## 添加工具分析

在 `src/content/tools/<category>/` 下创建 `.md` 文件，frontmatter 格式：

```yaml
---
name: "工具名称"
category: "evaluation"
tags: ["标签"]
status: "active"
confidence: "high"
date: 2026-06-05
summary: "一行摘要"
---
```

category 可选值：`evaluation` / `frameworks` / `protocols` / `observability` / `toolchain`

## 技术栈

Astro 6 + Content Collections (glob loader) + 纯 CSS 设计系统
