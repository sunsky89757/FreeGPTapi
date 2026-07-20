# UnifyLLM Free Trial API

[English](README.md) | [简体中文](README.zh-CN.md)

> One OpenAI-compatible API for GPT, Claude, Gemini, Grok, DeepSeek, GLM,
> Kimi, Qwen, MiniMax, and other leading models.

[![GitHub stars](https://img.shields.io/github/stars/sunsky89757/FreeGPTapi?style=flat-square)](https://github.com/sunsky89757/FreeGPTapi/stargazers)
[![Last commit](https://img.shields.io/github/last-commit/sunsky89757/FreeGPTapi?style=flat-square)](https://github.com/sunsky89757/FreeGPTapi/commits/main/)
[![OpenAI compatible](https://img.shields.io/badge/API-OpenAI%20compatible-10a37f?style=flat-square)](https://www.unifyllm.com/docs/)
[![Free key rate limit](https://img.shields.io/badge/free%20key-5%20RPM-f59e0b?style=flat-square)](#current-free-api-key)

**[Get a personal trial](https://www.unifyllm.top/sign-up?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=hero_signup)** ·
**[60-second quickstart](#60-second-quickstart)** ·
**[Live models & pricing](https://www.unifyllm.com/pricing/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=models)** ·
**[API documentation](https://www.unifyllm.com/docs/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=docs)**

UnifyLLM provides a single API for multiple model providers and supports
OpenAI, Anthropic, Gemini, and Grok-compatible request formats. This repository
is the official place for limited public test-key campaigns, minimal working
examples, and new-user onboarding.

## Current free API key

> [!IMPORTANT]
> **Status: preparing for release.** The new public API key has not been
> published yet. Watch this repository's Releases to be notified when it goes
> live.

| Item             | Current campaign                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| API key          | `PUBLIC_API_KEY_TO_BE_ADDED`                                                                                             |
| Base URL         | `https://api.unifyllm.top`                                                                                               |
| Rate limit       | **5 requests per minute (RPM)**                                                                                          |
| Total quota      | To be announced before release                                                                                           |
| Expiration       | To be announced before release                                                                                           |
| Available models | To be announced; the public key may support only a subset of the [live model catalog](https://www.unifyllm.com/pricing/) |
| Intended use     | Personal learning, evaluation, and compatibility testing                                                                 |

The public key is shared by all visitors. It is not suitable for production,
automation, load testing, resale, or confidential data. Availability may end
when the shared quota is exhausted.

### Fair-use rules

- Maximum **5 RPM**. Bursts and parallel requests may receive HTTP `429`.
- Do not use scripts to consume the shared quota continuously.
- Do not proxy, resell, redistribute, or embed the key in another public service.
- Do not use the key for production workloads or sensitive information.
- Abuse controls may temporarily block requests that threaten availability for others.
- For stable usage, create a [personal account and API key](https://www.unifyllm.top/sign-up).

## 60-second quickstart

The canonical API base is:

```text
https://api.unifyllm.top
```

The Chat Completions endpoint is:

```text
https://api.unifyllm.top/v1/chat/completions
```

After the public key is released, replace `PUBLIC_API_KEY_TO_BE_ADDED` below.
You can also use a personal key created in the UnifyLLM console.

```bash
export UNIFYLLM_API_KEY="PUBLIC_API_KEY_TO_BE_ADDED"

curl --request POST \
  --url "https://api.unifyllm.top/v1/chat/completions" \
  --header "Authorization: Bearer ${UNIFYLLM_API_KEY}" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-5.6-sol",
    "messages": [
      {"role": "user", "content": "Reply with: Hello, UnifyLLM!"}
    ]
  }'
```

PowerShell:

```powershell
$env:UNIFYLLM_API_KEY = "PUBLIC_API_KEY_TO_BE_ADDED"

curl.exe --request POST `
  --url "https://api.unifyllm.top/v1/chat/completions" `
  --header "Authorization: Bearer $env:UNIFYLLM_API_KEY" `
  --header "Content-Type: application/json" `
  --data '{"model":"gpt-5.6-sol","messages":[{"role":"user","content":"Reply with: Hello, UnifyLLM!"}]}'
```

If the example model is not included in the public-key campaign, select one of
the models announced with the release. Personal-key users can check the
[live model catalog](https://www.unifyllm.com/pricing/) or call `GET /v1/models`.

More examples:

- [Python with the OpenAI SDK](examples/python_chat.py)
- [Node.js with the OpenAI SDK](examples/node_chat.mjs)
- [Example setup and troubleshooting](examples/README.md)

## Choose the right trial path

### 1. Public shared key

Best for a quick, no-account compatibility test. It is limited to 5 RPM and a
shared quota. No uptime or availability guarantee is provided.

### 2. Personal developer trial

For a personal key, usage logs, and a private balance:

1. [Create an account](https://www.unifyllm.top/sign-up).
2. Join the [official Telegram community](https://t.me/+yDcypbL9kZY5ZmY1).
3. Send your user ID to [@sunsky89757](https://t.me/sunsky89757) to request
   **⚡3 in trial credits**.
4. Create a key in the [API Keys console](https://www.unifyllm.top/keys).

Trial-credit eligibility and availability are subject to the current campaign
rules.

### 3. Team or business evaluation

Companies, small teams, and AI application builders can
[apply for evaluation credits](https://www.unifyllm.com/contact/?utm_source=github&utm_medium=repository&utm_campaign=freegptapi&utm_content=business_trial).
Approved applicants may receive up to **$1,000** in credits, depending on use
case, expected volume, and integration plan.

## Supported APIs and use cases

| Capability               | Documentation                                                                             |
| ------------------------ | ----------------------------------------------------------------------------------------- |
| OpenAI Chat Completions  | [Create a Chat Completion](https://www.unifyllm.com/docs/api-reference/chat-completions/) |
| OpenAI Responses         | [Create a Model Response](https://www.unifyllm.com/docs/api-reference/responses/)         |
| Anthropic Messages       | [Create a Message](https://www.unifyllm.com/docs/api-reference/messages/)                 |
| Gemini GenerateContent   | [Generate content](https://www.unifyllm.com/docs/api-reference/generate-content/)         |
| Images and image editing | [Image API reference](https://www.unifyllm.com/docs/api-reference/create-image/)          |
| Embeddings               | [Create Embeddings](https://www.unifyllm.com/docs/api-reference/embeddings/)              |
| Model discovery          | [List models](https://www.unifyllm.com/docs/api-reference/list-models/)                   |
| Key usage                | [Get key usage](https://www.unifyllm.com/docs/api-reference/key-usage/)                   |

The platform also documents integrations for Codex, Claude Code, Claude
Desktop, Gemini CLI, OpenCode, OpenClaw, and other AI tools:
[integration guides](https://www.unifyllm.com/docs/integrations/).

## Common errors

| Error                         | What to check                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| `401 Unauthorized`            | Confirm that the key is current and the `Authorization: Bearer ...` header is present.                |
| `402` or insufficient balance | The shared quota or personal balance may be exhausted.                                                |
| `404` / model not found       | The model may not be available to this key or group. Check the campaign announcement or live catalog. |
| `429 Too Many Requests`       | The public key is limited to 5 RPM. Wait before retrying and avoid parallel calls.                    |
| Timeout or `5xx`              | Retry with backoff, then check announcements or contact support if the problem persists.              |

## Security

- Never commit a **personal** API key to GitHub or frontend code.
- Load personal keys from environment variables or a server-side secret manager.
- Revoke and recreate a key immediately if it is exposed.
- Public shared keys are intentionally temporary and must never be treated as secrets.
- Review [SECURITY.md](SECURITY.md), the
  [User Agreement](https://www.unifyllm.top/user-agreement), and the
  [Privacy Policy](https://www.unifyllm.top/privacy-policy) before production use.

## Updates and support

Starring helps others discover the project, but **a Star does not enable
notifications**. To receive public-key announcements:

1. Click **Watch** at the top of the repository.
2. Choose **Custom**.
3. Enable **Releases**.

Use [GitHub Issues](https://github.com/sunsky89757/FreeGPTapi/issues) for
reproducible documentation or example-code problems. Do not post personal API
keys or account details. For account and billing help, see [SUPPORT.md](SUPPORT.md).

Historical public-key campaigns have ended and were removed from the main
README. See [the campaign archive](archive/README.md) and
[GitHub Releases](https://github.com/sunsky89757/FreeGPTapi/releases).

## Disclaimer

UnifyLLM is an independent API platform. OpenAI, GPT, Claude, Anthropic,
Gemini, Google, Grok, xAI, DeepSeek, and other product names are trademarks of
their respective owners. This repository is not affiliated with or endorsed by
those model providers. Model availability, pricing, and upstream behavior may
change; always consult the live documentation before production use.

<a href="https://www.star-history.com/?repos=sunsky89757%2FFreeGPTapi&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=sunsky89757/FreeGPTapi&type=date&theme=dark&legend=top-left&sealed_token=wZBzlj0tCTAPU-jX8MaKTJsDG6OmKqHPQbfl70UAggud8V2wp8JHRypkFidlMisxQPOiaBAH6EAn6jx-d382cnfsJckNRMgb1IvQRrykR-b8pRfxJL5tv7jGoHf4exG42s0doSrNhPJUCv7BVyhDvYWY88rTLiIUL1kpFWULStFLpjGHuODv0UhhNxmN" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=sunsky89757/FreeGPTapi&type=date&legend=top-left&sealed_token=wZBzlj0tCTAPU-jX8MaKTJsDG6OmKqHPQbfl70UAggud8V2wp8JHRypkFidlMisxQPOiaBAH6EAn6jx-d382cnfsJckNRMgb1IvQRrykR-b8pRfxJL5tv7jGoHf4exG42s0doSrNhPJUCv7BVyhDvYWY88rTLiIUL1kpFWULStFLpjGHuODv0UhhNxmN" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=sunsky89757/FreeGPTapi&type=date&legend=top-left&sealed_token=wZBzlj0tCTAPU-jX8MaKTJsDG6OmKqHPQbfl70UAggud8V2wp8JHRypkFidlMisxQPOiaBAH6EAn6jx-d382cnfsJckNRMgb1IvQRrykR-b8pRfxJL5tv7jGoHf4exG42s0doSrNhPJUCv7BVyhDvYWY88rTLiIUL1kpFWULStFLpjGHuODv0UhhNxmN" />
 </picture>
</a>
