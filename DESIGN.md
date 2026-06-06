# Design

## Theme

Light. 场景：开发者在工位上，下午自然光，27 寸屏幕上阅读研究内容和对比工具。纯白背景让内容层次通过字重和语义色自然浮现。

## Color

策略：Restrained，但在关键位置（决策流入口、数据可视化）允许 Committed 升级。

### Palette (OKLCH)

```
Background layers:
  bg:         oklch(1.000 0.000 0)       /* 纯白 */
  surface:    oklch(0.975 0.002 265)     /* 微偏蓝灰，卡片/侧栏 */
  surface-2:  oklch(0.955 0.004 265)     /* 更深一级 */
  border:     oklch(0.91 0.006 265)
  border-dim: oklch(0.94 0.004 265)

Text:
  ink:        oklch(0.15 0.010 265)      /* 主文本，近黑微偏蓝 */
  ink-2:      oklch(0.30 0.010 265)      /* 次要文本 */
  muted:      oklch(0.49 0.008 265)      /* 辅助/标签文本 */

Primary (seed hue 357°):
  primary:    oklch(0.52 0.17 357)       /* 深玫瑰红，交互/选中/主操作 */
  primary-dim:oklch(0.52 0.17 357 / 0.08)
  primary-bg: oklch(0.96 0.015 357)      /* callout 底色 */

Accent:
  accent:     oklch(0.42 0.11 230)       /* 深靛蓝，辅助色 */
  accent-dim: oklch(0.42 0.11 230 / 0.07)

Semantic:
  green:      oklch(0.48 0.14 155)       /* high confidence, active */
  orange:     oklch(0.55 0.14 55)        /* medium confidence, warning */
  red:        oklch(0.50 0.16 25)        /* low confidence, deprecated */
  purple:     oklch(0.48 0.15 300)       /* emerging */
```

每个语义色有 dim 变体（alpha 0.08-0.09），用于徽章背景色。

## Typography

```
Font stack: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, "Noto Sans SC", sans-serif
Mono: ui-monospace, "SF Mono", "Cascadia Code", Menlo, monospace

Scale (ratio ~1.2):
  0.6875rem  — 标签、元数据（weight 600, uppercase）
  0.8125rem  — 辅助文本、卡片摘要
  0.9375rem  — 正文（line-height 1.75）
  1.125rem   — 小标题（weight 650）
  1.5rem     — 页面标题（weight 750）
  2rem       — 展示标题（weight 800, letter-spacing -0.025em）

Max width: 68ch for prose, breakout to 90ch for tables/data
```

## Components

详见 `src/styles/global.css` 中的 badge / callout / comparison 样式定义。

## Layout

三栏：左导航（220px）+ 内容区（弹性，max 820px）+ 右侧留白。移动端待实现。

## Motion

- 120-200ms, ease-out (cubic-bezier(0.16, 1, 0.3, 1))
- 仅用于 hover 状态和 details 展开
- `@media (prefers-reduced-motion: reduce)` 降级
