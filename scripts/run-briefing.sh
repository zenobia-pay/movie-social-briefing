#!/usr/bin/env bash
set -euo pipefail
DATE="${1:-$(date +%F)}"
TOPIC="${2:-What are the most talked about movies on social media}"
python3 "$(dirname "$0")/run_briefing.py" --date "$DATE" --topic "$TOPIC"
