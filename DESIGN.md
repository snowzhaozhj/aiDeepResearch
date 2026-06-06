# Design

## Theme

双主题，默认亮色。用户可通过顶栏按钮切换，选择持久化在 localStorage。

- **亮色（默认）**：纯白底，微灰表面层，深墨字。适合日常阅读和白天使用。
- **暗色**：深暖黑底（oklch 0.13, hue 350°），发光玫瑰品牌色。适合暗光环境沉浸阅读。

## Color

策略：Committed。玫瑰红不再只是链接色，而是品牌签名，在暗背景上以发光感存在。

### Palette (OKLCH)

```
Background layers:
  bg:         oklch(0.13 0.015 350)      /* 深暖黑，带微妙玫瑰底色 */
  surface:    oklch(0.17 0.012 350)      /* 抬升层，卡片 */
  surface-2:  oklch(0.21 0.010 350)      /* 更亮一级，hover/active */
  border:     oklch(0.26 0.012 350)      /* 可见分隔 */
  border-dim: oklch(0.21 0.008 350)      /* 微弱分隔 */

Text:
  ink:        oklch(0.93 0.008 80)       /* 暖白，正文主色 */
  ink-2:      oklch(0.72 0.008 80)       /* 次要文本 */
  muted:      oklch(0.52 0.006 80)       /* 辅助/标签 */

Primary (seed hue 357°, 暗底上提亮):
  primary:    oklch(0.68 0.22 357)       /* 发光玫瑰，交互/选中/品牌 */
  primary-dim:oklch(0.68 0.22 357 / 0.15)
  primary-bg: oklch(0.18 0.04 357)       /* callout 底色 */

Accent:
  accent:     oklch(0.72 0.10 200)       /* 冷青，与暖主色形成张力 */
  accent-dim: oklch(0.72 0.10 200 / 0.12)

Semantic (暗底上用更高明度):
  green:      oklch(0.72 0.16 155)       /* high confidence, active */
  green-dim:  oklch(0.72 0.16 155 / 0.12)
  orange:     oklch(0.74 0.14 65)        /* medium confidence */
  orange-dim: oklch(0.74 0.14 65 / 0.12)
  red:        oklch(0.68 0.17 25)        /* low confidence, deprecated */
  red-dim:    oklch(0.68 0.17 25 / 0.10)
  purple:     oklch(0.70 0.15 300)       /* emerging */
  purple-dim: oklch(0.70 0.15 300 / 0.10)
```

## Typography

```
Font stack: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Noto Sans SC", sans-serif
Mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace

Scale (ratio ~1.33, 比旧版更戏剧化):
  0.75rem   — 标签、元数据（weight 500）
  0.8125rem — 辅助文本
  1rem      — 正文（weight 400, line-height 1.8）
  1.25rem   — 小标题（weight 650）
  1.875rem  — 页面标题（weight 750, tracking -0.025em）
  2.75rem   — 展示标题（weight 800, tracking -0.035em）

Max width: 72ch for prose, breakout to 96ch for tables/data
```

## Layout

去掉固定侧边栏。采用顶部极简导航 + 中心内容区（max 900px）。
首页为研究索引，研究详情页为沉浸阅读模式。

## Motion

- 150-250ms, ease-out-expo (cubic-bezier(0.16, 1, 0.3, 1))
- hover: subtle glow / opacity shift
- 页面内容入场: transform + opacity, staggered
- `@media (prefers-reduced-motion: reduce)` 简化为 crossfade 或即时
