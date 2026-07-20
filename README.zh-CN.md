# UnifyLLM 免费试用 API

[English](README.md) | [简体中文](README.zh-CN.md)

> 通过一个兼容 OpenAI 的统一 API，调用 GPT、Claude、Gemini、Grok、
> DeepSeek、GLM、Kimi、Qwen、MiniMax 等主流模型。

[![GitHub Stars](https://img.shields.io/github/stars/sunsky89757/FreeGPTapi?style=flat-square)](https://github.com/sunsky89757/FreeGPTapi/stargazers)
[![最近提交](https://img.shields.io/github/last-commit/sunsky89757/FreeGPTapi?style=flat-square)](https://github.com/sunsky89757/FreeGPTapi/commits/main/)
[![兼容 OpenAI](https://img.shields.io/badge/API-%E5%85%BC%E5%AE%B9%20OpenAI-10a37f?style=flat-square)](https://www.unifyllm.com/zh/docs/)
[![免费 Key 限速](https://img.shields.io/badge/%E5%85%8D%E8%B4%B9%20Key-5%20RPM-f59e0b?style=flat-square)](#当前免费-api-key)

**[领取个人试用额度](https://www.unifyllm.top/sign-up?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=hero_signup_zh)** ·
**[60 秒快速开始](#60-秒快速开始)** ·
**[实时模型与价格](https://www.unifyllm.com/zh/pricing/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=models_zh)** ·
**[API 文档](https://www.unifyllm.com/zh/docs/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=docs_zh)**

UnifyLLM 使用一个 API 统一接入多个模型供应商，兼容 OpenAI、Anthropic、
Gemini 和 Grok 等请求格式。本仓库用于发布限量公共测试 Key、提供可运行的
接入示例，并帮助新用户完成首次调用。

## 当前免费 API Key

> [!IMPORTANT]
> **状态：即将发布。** 新的公共 API Key 尚未公开。请订阅本仓库的
> Releases，Key 上线时即可收到通知。

| 项目 | 本期活动 |
| --- | --- |
| API Key | `PUBLIC_API_KEY_TO_BE_ADDED` |
| Base URL | `https://api.unifyllm.top` |
| 速率限制 | **每分钟最多 5 次请求（5 RPM）** |
| 总额度 | 发布前公布 |
| 失效规则 | 发布前公布 |
| 可用模型 | 发布前公布；公共 Key 可能只开放[实时模型列表](https://www.unifyllm.com/zh/pricing/)中的部分模型 |
| 适用场景 | 个人学习、功能评估和兼容性测试 |

公共 Key 由所有访问者共享，不适合生产环境、自动化任务、压力测试、转售或
处理机密数据。共享额度耗尽后，Key 可能随时停止服务。

### 公平使用规则

- 最大 **5 RPM**，突发请求或并发请求可能返回 HTTP `429`。
- 请勿通过脚本持续消耗共享额度。
- 禁止代理、转售、二次分发或嵌入其他公共服务。
- 禁止用于生产业务或处理敏感信息。
- 当调用行为影响其他用户时，系统可能临时限制相关请求。
- 如需稳定调用，请注册并创建[个人 API Key](https://www.unifyllm.top/sign-up)。

## 60 秒快速开始

标准 API Base URL：

```text
https://api.unifyllm.top
```

Chat Completions 完整端点：

```text
https://api.unifyllm.top/v1/chat/completions
```

公共 Key 发布后，将下面的 `PUBLIC_API_KEY_TO_BE_ADDED` 替换成实际 Key；
你也可以使用 UnifyLLM 控制台创建的个人 Key。

Linux / macOS：

```bash
export UNIFYLLM_API_KEY="PUBLIC_API_KEY_TO_BE_ADDED"

curl --request POST \
  --url "https://api.unifyllm.top/v1/chat/completions" \
  --header "Authorization: Bearer ${UNIFYLLM_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-5.6-sol",
    "messages": [
      {"role": "user", "content": "请回复：你好，UnifyLLM！"}
    ]
  }'
```

Windows PowerShell：

```powershell
$env:UNIFYLLM_API_KEY = "PUBLIC_API_KEY_TO_BE_ADDED"

curl.exe --request POST `
  --url "https://api.unifyllm.top/v1/chat/completions" `
  --header "Authorization: Bearer $env:UNIFYLLM_API_KEY" `
  --header "Content-Type: application/json" `
  --data '{"model":"gpt-5.6-sol","messages":[{"role":"user","content":"请回复：你好，UnifyLLM！"}]}'
```

如果示例模型不在本期公共 Key 的开放范围内，请改用 Release 公告中列出的模型。
个人 Key 用户可查看[实时模型列表](https://www.unifyllm.com/zh/pricing/)，或调用
`GET /v1/models`。

更多示例：

- [Python + OpenAI SDK](examples/python_chat.py)
- [Node.js + OpenAI SDK](examples/node_chat.mjs)
- [示例配置与故障排查](examples/README.md)

## 选择适合你的试用方式

### 1. 公共共享 Key

适合无需注册的快速兼容性测试。限制为 5 RPM，并与其他用户共享总额度，
不提供可用性和持续时间保证。

### 2. 个人开发者试用

如需独立 Key、用量日志和个人余额：

1. [注册 UnifyLLM](https://www.unifyllm.top/sign-up)。
2. 加入[官方 Telegram 交流群](https://t.me/+yDcypbL9kZY5ZmY1)。
3. 向 [@sunsky89757](https://t.me/sunsky89757) 提供用户 ID，申请
   **⚡3 测试额度**。
4. 在 [API Keys 控制台](https://www.unifyllm.top/keys)创建个人 Key。

测试额度的资格和可用性以当前活动规则为准。

### 3. 团队或企业测试

企业、小型团队和 AI 应用开发者可以
[申请项目测试额度](https://www.unifyllm.com/zh/contact/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=business_trial_zh)。
审核会参考使用场景、预计调用量和接入计划；通过后最高可获得 **$1,000** 测试额度。

## 支持的接口和使用场景

| 能力 | 文档 |
| --- | --- |
| OpenAI Chat Completions | [创建 Chat Completion](https://www.unifyllm.com/zh/docs/api-reference/chat-completions/) |
| OpenAI Responses | [创建 Model Response](https://www.unifyllm.com/zh/docs/api-reference/responses/) |
| Anthropic Messages | [创建 Message](https://www.unifyllm.com/zh/docs/api-reference/messages/) |
| Gemini GenerateContent | [生成内容](https://www.unifyllm.com/zh/docs/api-reference/generate-content/) |
| 图片生成与编辑 | [图片接口文档](https://www.unifyllm.com/zh/docs/api-reference/create-image/) |
| Embeddings | [创建 Embeddings](https://www.unifyllm.com/zh/docs/api-reference/embeddings/) |
| 获取模型列表 | [List Models](https://www.unifyllm.com/zh/docs/api-reference/list-models/) |
| 查询 Key 用量 | [Key Usage](https://www.unifyllm.com/zh/docs/api-reference/key-usage/) |

平台还提供 Codex、Claude Code、Claude Desktop、Gemini CLI、OpenCode、
OpenClaw 等工具的接入说明，参见[工具集成文档](https://www.unifyllm.com/zh/docs/integrations/)。

## 常见错误

| 错误 | 排查方法 |
| --- | --- |
| `401 Unauthorized` | 检查 Key 是否仍然有效，以及是否正确传入 `Authorization: Bearer ...`。 |
| `402` 或余额不足 | 公共共享额度或个人账户余额可能已经耗尽。 |
| `404` / model not found | 当前 Key 或分组可能没有该模型权限，请查看活动公告或实时模型列表。 |
| `429 Too Many Requests` | 公共 Key 限制为 5 RPM，请等待后重试并避免并发调用。 |
| 超时或 `5xx` | 使用退避策略重试；持续异常时查看公告或联系支持。 |

## 安全提示

- 不要把**个人 API Key**提交到 GitHub、前端代码或客户端安装包。
- 使用环境变量或服务端密钥管理器加载个人 Key。
- 个人 Key 意外泄露后，应立即撤销并重新创建。
- 公共共享 Key 是有意公开的临时凭证，不能当作个人密钥使用。
- 生产使用前请阅读 [SECURITY.md](SECURITY.md)、
  [用户协议](https://www.unifyllm.top/user-agreement)和
  [隐私政策](https://www.unifyllm.top/privacy-policy)。

## 更新通知与支持

Star 可以帮助更多人发现项目，但 **Star 不会自动发送新 Key 通知**。如需接收
公共 Key 发布通知：

1. 点击仓库顶部的 **Watch**。
2. 选择 **Custom**。
3. 勾选 **Releases**。

可以通过 [GitHub Issues](https://github.com/sunsky89757/FreeGPTapi/issues)
反馈可复现的文档或示例代码问题。请勿在 Issue 中提交个人 API Key、用户 ID 或
账户信息。账户和计费支持请查看 [SUPPORT.md](SUPPORT.md)。

此前的公共 Key 活动均已结束，已从主 README 移除。历史说明参见
[活动归档](archive/README.md)和
[GitHub Releases](https://github.com/sunsky89757/FreeGPTapi/releases)。

## 免责声明

UnifyLLM 是独立的 API 平台。OpenAI、GPT、Claude、Anthropic、Gemini、
Google、Grok、xAI、DeepSeek 等产品名称和商标归其各自权利人所有。本仓库与
上述模型厂商不存在隶属或官方背书关系。模型可用性、价格和上游行为可能调整，
生产使用前请以实时文档为准。

[![Star History Chart](https://api.star-history.com/svg?repos=sunsky89757/FreeGPTapi&type=Date)](https://star-history.com/#sunsky89757/FreeGPTapi&Date)
