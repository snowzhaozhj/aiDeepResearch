---
name: "MCP"
category: "protocols"
tags: ["工具连接", "Anthropic", "标准协议"]
status: "active"
confidence: "high"
date: 2026-06-05
summary: "Anthropic 主导的工具/数据连接协议，2026 路线图含 Tasks 原语和企业扩展"
---

## 定位

Model Context Protocol（MCP）是 Anthropic 主导的 AI 代理互操作协议，定义了 Agent 如何连接工具和数据源的标准化方式。

## 2026 路线图

由首席维护者 David Soria Parra 于 2026-03-09 发布：

1. **水平扩展传输**：超越单进程 stdio
2. **.well-known 发现**：标准化服务发现
3. **Tasks 原语**：含重试/过期语义
4. **企业扩展**：审计/SSO/网关

## 生态位置

MCP 是六大 AI 代理互操作协议之一，与 A2A（Google）、UCP、AP2、A2UI、AG-UI 共同构成协议全景。MCP 聚焦于工具/数据连接层。
