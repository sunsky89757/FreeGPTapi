"""Minimal OpenAI SDK example for UnifyLLM.

Install: pip install openai
Run:     python examples/python_chat.py
"""

import os

from openai import OpenAI


api_key = os.environ.get("UNIFYLLM_API_KEY")
if not api_key:
    raise SystemExit("Set the UNIFYLLM_API_KEY environment variable first.")

client = OpenAI(
    api_key=api_key,
    base_url=os.environ.get("UNIFYLLM_BASE_URL", "https://api.unifyllm.top/v1"),
)

response = client.chat.completions.create(
    model=os.environ.get("UNIFYLLM_MODEL", "gpt-5.6-sol"),
    messages=[{"role": "user", "content": "Reply with: Hello, UnifyLLM!"}],
)

print(response.choices[0].message.content)
