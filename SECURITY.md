# Security Policy

This tool runs entirely client-side — no server processes your data. The main security property to protect is exactly that: **nothing should ever leave the browser.**

If you find a way this fails (a request that carries user content anywhere, dependency issue that could exfiltrate input, XSS via crafted YAML), please report it privately via GitHub Security Advisories on this repo rather than a public issue.

You'll get an acknowledgment within a few days. Fixes ship as fast as possible given this is a small project.
