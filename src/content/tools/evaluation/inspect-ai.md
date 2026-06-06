---
name: "Inspect AI"
category: "evaluation"
tags: ["agent-评估", "安全", "沙箱"]
status: "active"
confidence: "high"
date: 2026-06-05
repo: "https://github.com/UKGovernmentBEIS/inspect_ai"
summary: "英国 AI 安全研究所开发，200+ 预构建任务，支持 Agent 工作流和沙箱隔离"
---

## 为什么值得关注

在 LLM 评估工具中，Inspect AI 占据了一个独特的位置：它不仅是评估框架，更是 **Agent 行为的安全测试平台**。当你需要在沙箱环境中验证 Agent 是否会做出危险操作时，这是目前最成熟的选择。

Inspect AI 的核心价值不在于基准测试数量（虽然 200+ 任务已经很多），而在于它的 **Agent 工作流原生支持**：内置 ReAct 和 Deep Agent，可以桥接 Claude Code、Codex CLI、Gemini CLI，在 Docker/K8s 沙箱中安全执行。

## 核心能力

- **200+ 预构建评估任务**，覆盖安全、推理、编码等多个维度
- **广泛的模型支持**：OpenAI / Anthropic / Google / vLLM / Ollama
- **Agent 原生**：内置 ReAct、Deep Agent，支持多步骤 Agent 工作流评估
- **沙箱隔离**：Docker 和 K8s 原生支持，Agent 在受控环境中执行
- **编码 Agent 桥接**：可直接评估 Claude Code、Codex CLI、Gemini CLI 的表现

## 适用场景

| 场景 | 适合度 | 说明 |
|---|---|---|
| AI 安全评估 | **最佳** | 专为安全评估设计，AISI 背书 |
| Agent 能力测试 | **最佳** | 内置 Agent 工作流，沙箱隔离 |
| 标准学术基准 | 可用 | 任务丰富但不如 lm-eval-harness 全面 |
| CI/CD 集成 | 可用 | 支持但不如 DeepEval 的 pytest 集成顺滑 |

不要试图用一个框架覆盖所有评估需求。常见组合：Inspect AI 做 Agent 安全评估 + lm-eval-harness 做标准基准 + DeepEval 做日常 CI 回归。

## 置信度说明

本分析基于官方文档、GitHub 仓库和多个独立源交叉验证，置信度为 **HIGH**。核心能力声明均经主源确认，Agent 桥接功能获 2-1 验证通过。
