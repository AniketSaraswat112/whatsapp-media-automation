#!/bin/zsh
source /opt/homebrew/opt/nvm/nvm.sh
nvm use 22
export N8N_EDITOR_BASE_URL=https://identify-left-snowsuit.ngrok-free.dev
export WEBHOOK_URL=https://identify-left-snowsuit.ngrok-free.dev
n8n start &
ngrok http 5678
