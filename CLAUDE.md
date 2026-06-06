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
├── content/                  # Astro Content Collections（glob loader）
│   ├── tools/                # 工具分析，按主题子目录
│   │   ├── evaluation/       # 评估体系
│   │   ├── frameworks/       # Agent 框架
│   │   ├── protocols/        # 互操作协议
│   │   ├── observability/    # 可观测性
│   │   └── toolchain/        # 开发工具链
│   ├── guides/               # 决策指南 & 对比分析
│   └── reports/              # 综合研究报告
├── content.config.ts         # Collection schema 定义
├── layouts/Base.astro        # 全局布局（topbar + sidebar + content）
├── styles/global.css         # 设计 token 和全局样式
├── pages/
│   ├── index.astro           # 首页（决策流 + 最近更新）
│   ├── tools/index.astro     # 工具列表（按分类分组）
│   ├── tools/[...slug].astro # 工具详情（动态路由）
│   └── reports/[slug].astro  # 报告详情
└── components/               # 可复用组件（待填充）
experiments/                  # 可独立运行的实验代码
```

## Frontmatter 规范

### 工具（`src/content/tools/` 下）

```yaml
name: "工具名称"
category: "evaluation"        # evaluation | frameworks | protocols | observability | toolchain
tags: ["标签1", "标签2"]
status: "active"              # active | deprecated | acquired | emerging
confidence: "high"            # high | medium | low
date: 2026-06-05
repo: "https://github.com/..."  # 可选
stars: 12800                    # 可选
summary: "一行摘要"
```

### 报告（`src/content/reports/` 下）

```yaml
title: "报告标题"
date: 2026-06-05
method: "研究方法描述"       # 可选
confidence: "high"
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

- 新增工具分析时，在对应的 `src/content/tools/<category>/` 下创建 `.md` 文件
- 新增研究主题前先检查仓库中是否已有相关内容
- 引用外部资源时标注来源和日期
