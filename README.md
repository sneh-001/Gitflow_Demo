# Git Branching and Pull Request Workflow

## Overview

This repository follows a structured workflow to ensure a smooth development process. Below are the key steps for creating and merging feature branches:

### Steps to Create and Merge a Feature Branch

1. **Create a feature branch from `develop`**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
2. **Modify the file**:
   ```bash
   git add .
   git commit -m "abc"
   git pull
   git flow feature publish feature-name
3. **Generate a pull request and wait for it to get approved**

   ## Thank You
