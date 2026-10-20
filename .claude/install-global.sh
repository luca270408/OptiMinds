#!/usr/bin/env bash
# Instalează agenții și skill-urile taste-skill GLOBAL (~/.claude), pentru orice folder.
# Rulează o singură dată pe calculatorul tău:  bash .claude/install-global.sh
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${HOME}/.claude"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$TARGET/agents" "$TARGET/skills"

echo "1/2 Agenți (27) -> $TARGET/agents"
cp "$HERE"/agents/*.md "$TARGET/agents/"

echo "2/2 Skill-uri -> $TARGET/skills"
# redesign-skill vine împachetat în acest repo (nu mai există în upstream)
for d in "$HERE"/skills/*/; do
  rm -rf "$TARGET/skills/$(basename "$d")"; cp -r "$d" "$TARGET/skills/$(basename "$d")"
done
# taste-skill: ultima versiune din GitHub
GIT_LFS_SKIP_SMUDGE=1 git clone --depth 1 https://github.com/Leonxlnx/taste-skill "$TMP/taste-skill" >/dev/null 2>&1
rm -rf "$TARGET/skills/taste-skill"
cp -r "$TMP/taste-skill/skills/taste-skill" "$TARGET/skills/taste-skill"

echo "Gata. Repornește Claude Code (sesiune nouă) ca să apară."
