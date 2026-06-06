---
name: publish-research
description: 将 deep-research 的研究结果格式化为本站 MDX 格式，使用组件增强视觉并放到正确目录
disable-model-invocation: true
---

# 发布研究到站点

用户提供研究主题或已有的研究内容。执行以下步骤：

1. 如果用户只提供主题，先运行 `/deep-research` 获取研究内容
2. 将研究内容转化为本站 MDX 格式：
   - 核心发现用 `<KeyFinding>` 组件
   - 工具/方案对比用 `<ComparisonMatrix>`（所有项目名加 GitHub/官网链接）
   - 被验证/驳回的声明用 `<VerdictCard>`
   - 时间线/演进用 `<Timeline>`
   - 多维度评分用 `<ScoreCard>`
   - 重要提示/警告用 `<Callout>`
   - 正文中所有提到的外部项目必须附带链接
3. 确保 frontmatter 包含 title、date、summary、tags、method、confidence
4. 写入 `src/content/research/<topic>/index.mdx`
5. 运行 `npm run build` 验证无错误
6. 告知用户文件路径，提示可以 `npm run dev` 预览或直接提交

## 格式化规则

- 每个大章节（h2）之间用 `---` 分隔
- 参考来源区块使用 ComparisonMatrix 且每条带链接
- 对比表格中的工具/平台名用 `[名称](url)` 格式
- 置信度和来源在正文中自然标注，不要单独罗列
