# Security Policy / 安全政策

## Never publish a personal API key

Do not include personal API keys, user IDs, request logs containing private
data, access tokens, passwords, or billing information in Issues, Discussions,
pull requests, screenshots, or example files.

请勿在 Issue、Discussion、Pull Request、截图或示例文件中公开个人 API Key、
用户 ID、包含隐私数据的请求日志、访问令牌、密码或计费信息。

If a personal key is exposed, revoke it immediately in the UnifyLLM console and
create a replacement. Removing the text from the latest Git commit does not
remove it from Git history.

个人 Key 泄露后，请立即在 UnifyLLM 控制台撤销并重新创建。只从最新提交删除
密钥并不能清除 Git 历史中的记录。

## Public campaign keys

Keys explicitly published in this repository's current campaign section are
temporary shared credentials. They are intentionally public, limited to
5 RPM for the upcoming campaign, and must not be used for production or
sensitive data.

本仓库活动区明确公布的 Key 是临时共享凭证。本期公共 Key 限制为 5 RPM，
不得用于生产环境或敏感数据。

## Reporting a vulnerability

Do not open a public Issue for a vulnerability or credential exposure. Contact
the operator through the official channels listed in [SUPPORT.md](SUPPORT.md)
and include only the minimum information required to reproduce the issue.

安全漏洞或凭证泄露问题请勿创建公开 Issue。请通过 [SUPPORT.md](SUPPORT.md)
列出的官方渠道联系维护者，并仅提供复现所需的最少信息。
