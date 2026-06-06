---
name: "DeepEval"
category: "evaluation"
tags: ["pytest", "CI/CD", "LLM-as-Judge"]
status: "active"
confidence: "high"
date: 2026-06-05
repo: "https://github.com/confident-ai/deepeval"
summary: "基于 pytest 的 LLM-as-Judge 评估框架，CI/CD 友好，assert_test 范式"
---

## 定位

将 LLM 评估嵌入 pytest 工作流，用 `assert_test` 范式让评估像写单元测试一样自然。几乎所有内置指标为 LLM-as-Judge 类型，分数 0-1 可配置阈值。

## 注意

需要 API 密钥（依赖外部 LLM 做评判），有成本和延迟开销。适合团队已有 pytest 习惯的场景。

## 适用场景

| 场景 | 适合度 | 说明 |
|---|---|---|
| CI/CD 回归测试 | **最佳** | pytest 原生集成 |
| 团队协作评估 | **最佳** | 标准化的测试工作流 |
| 学术基准 | 不适合 | 应使用 lm-eval-harness |
| 离线评估 | 不适合 | 依赖外部 API |
