#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default

cd ..

mkdir .pnpm-store
export PNPM_HOME=.pnpm-store

file_path="azure-rest-api-specs/branch.txt"
# Check if the file exists
if [ -f "$file_path" ]; then
    # Load the content of the file into a variable
    branch=$(cat "$file_path")
    echo "get branch $branch"
else
    echo "Branch file does not exist."
fi

git clone https://github.com/Azure/azure-sdk-tools/

cd azure-sdk-tools
if [ -z "$branch" ]; then
  echo 'branch is empty'
else
    git checkout -b test $branch
    echo git checkout -b test $branch
fi

echo '-------------- git status start'
git status
echo '-------------- git status end'

cd tools/js-sdk-release-tools
pnpm install
pnpm run build
pnpm link --global
cd ../../..

cd azure-sdk-for-js
code-gen-pipeline --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.12 --typespecEmitter=@azure-tools/typespec-ts
