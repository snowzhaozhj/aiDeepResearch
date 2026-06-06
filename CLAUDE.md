# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 仓库定位

**AI Harness 深度研究站点**，基于 Astro 构建的静态站，系统性地分析和记录 AI 开发生态中的各类 harness 工具。核心差异化：每个结论标注置信度，有观点但标明依据。

## 开发命令

```bash
npm run dev      # 启动开发服务器 localhost:4321
npm run build    # 构建静态站点到 dist/
npm run preview  # 预览构建结果
```

## 目录结构

```
src/
├── content/
│   └── research/            # 研究项目（每个子目录一篇，index.md 或 index.mdx）
├── content.config.ts        # Collection schema（glob loader, pattern: **/index.{md,mdx}）
├── components/              # MDX 可用的报告组件
│   ├── KeyFinding.astro     # 核心发现高亮面板（level: high/medium/low）
│   ├── VerdictCard.astro    # 声明验证结果（confirmed/rejected/partial）
│   ├── ComparisonMatrix.astro # 对比表格（支持 [text](url) 链接语法）
│   ├── Timeline.astro       # 事件时间线
│   ├── ScoreCard.astro      # 多维度评分条形图
│   └── Callout.astro        # 提示框（insight/warning/tip/note）
├── layouts/Base.astro       # 全局布局（topbar + theme toggle + content）
├── styles/global.css        # 设计 token（:root 亮色 / [data-theme="dark"] 暗色）
└── pages/
    ├── index.astro          # 首页（研究索引）
    └── research/[...slug].astro  # 研究详情（TOC + 进度条）
```

## Frontmatter 规范

### 研究项目（`src/content/research/<topic>/index.{md,mdx}`）

```yaml
title: "报告标题"
date: 2026-06-05
summary: "一行摘要"
tags: ["标签1", "标签2"]
method: "研究方法描述"       # 可选
confidence: "high"            # high | medium | low
```

## 语言与风格

- 所有文档、注释、分析内容使用**中文**
- 分析要有深度，优先记录非显而易见的洞察和坑点
- 对比分析时给出明确的适用场景推荐，而非罗列功能
- 每个结论标注置信度（high/medium/low）和验证来源

## 设计系统

- 双主题（亮色默认 + 暗色可切换），玫瑰红主色（oklch hue 357°）
- 去掉侧边栏，采用极简顶部导航 + 全宽内容区布局
- 亮色 token 在 `:root`，暗色在 `[data-theme="dark"]`
- 切换按钮在 topbar 右侧，通过 localStorage 持久化
- 详细设计规范见 `DESIGN.md` 和 `PRODUCT.md`

## 工作方式

- 新增研究时在 `src/content/research/<topic>/` 下创建 `index.mdx`
- 优先用 `.mdx` 以利用组件增强视觉；纯文本内容可用 `.md`
- 在 MDX 中通过 `import X from '@components/X.astro'` 导入组件
- ComparisonMatrix 的 cell 值支持 `[text](url)` 自动渲染为链接
- 所有提到的外部项目/工具必须附带链接（GitHub/官网/论文）
- 新增研究前先检查仓库中是否已有相关内容
- 引用外部资源时标注来源和日期
