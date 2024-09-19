#!/bin/bash

# Start Flask app in a detached screen session
screen -dmS flask_app bash -c 'cd ./krishidost/backend && source venv/bin/activate && python app.py'

# Start React app in a new screen session
screen -dmS react_app bash -c 'cd ./krishidost/frontend && npm run dev'