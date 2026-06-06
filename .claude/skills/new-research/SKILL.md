---
name: new-research
description: 创建新研究项目的 MDX 脚手架，包含 frontmatter、组件 import 和基本章节结构
disable-model-invocation: true
---

# 新建研究项目

用户提供研究主题名（中文）作为参数。执行以下步骤：

1. 将主题转为英文 kebab-case 作为目录名（如 "AI编程助手对比" → `ai-coding-assistant-comparison`）
2. 在 `src/content/research/<目录名>/` 下创建 `index.mdx`
3. 填入以下模板：

```mdx
---
title: "<用户提供的中文标题>"
date: <今天日期 YYYY-MM-DD>
summary: "<请用户补充或根据主题生成一句话摘要>"
tags: [<根据主题推断 2-4 个标签>]
method: ""
confidence: "medium"
---
import KeyFinding from '@components/KeyFinding.astro';
import VerdictCard from '@components/VerdictCard.astro';
import ComparisonMatrix from '@components/ComparisonMatrix.astro';
import Timeline from '@components/Timeline.astro';
import ScoreCard from '@components/ScoreCard.astro';
import Callout from '@components/Callout.astro';

## 核心发现

<KeyFinding level="medium">
  待填充
</KeyFinding>

---

## 一、

---

## 参考来源

<ComparisonMatrix
  headers={["来源", "类型"]}
  rows={[
    { "来源": "[名称](url)", "类型": "主源" },
  ]}
/>
```

4. 告知用户文件已创建，提示可以开始撰写内容或使用 `/deep-research` 进行研究。
