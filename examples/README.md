# Examples / 示例

These examples use a personal key or the currently announced public test key.
The public key is limited to **5 requests per minute**.

这些示例既可使用个人 Key，也可使用当前活动公布的公共测试 Key。公共 Key 的
限制为**每分钟最多 5 次请求**。

## Environment variables / 环境变量

Linux or macOS:

```bash
export UNIFYLLM_API_KEY="YOUR_API_KEY"
export UNIFYLLM_BASE_URL="https://api.unifyllm.top/v1"
export UNIFYLLM_MODEL="gpt-5.6-sol"
```

PowerShell:

```powershell
$env:UNIFYLLM_API_KEY = "YOUR_API_KEY"
$env:UNIFYLLM_BASE_URL = "https://api.unifyllm.top/v1"
$env:UNIFYLLM_MODEL = "gpt-5.6-sol"
```

The selected model must be available to the current key. Public-key campaigns
may enable only a subset of the full catalog.

所选模型必须在当前 Key 的权限范围内。公共 Key 活动可能只开放完整模型列表中的
部分模型。

## Python

```bash
python -m pip install openai
python examples/python_chat.py
```

## Node.js

```bash
npm install openai
node examples/node_chat.mjs
```

## Troubleshooting / 故障排查

- `401`: verify the API key and Bearer header / 检查 Key 和 Bearer 请求头。
- `404`: choose a model available to the key / 改用当前 Key 有权限的模型。
- `429`: the public key is limited to 5 RPM / 公共 Key 限制为 5 RPM。
- `402`: the shared quota or personal balance may be exhausted / 额度可能已耗尽。

See the [English quickstart](https://www.unifyllm.com/docs/getting-started/) or
[中文快速开始](https://www.unifyllm.com/zh/docs/getting-started/) for account,
balance, API key, and usage-log instructions.
