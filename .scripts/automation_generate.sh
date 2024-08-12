#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default

branch=$(../../azure/azure-rest-api-specs/branch.txt)
echo "switch to branch $branch"

cd ../..
git clone https://github.com/Azure/azure-sdk-tools/
cd azure-sdk-tools
git checkout -b test $branch
cd ../azure-sdk-for-js
pnpm install
cd .scripts
tsx ../../azure-sdk-tools/tools/js-sdk-release-tools/src/autoGenerateInPipeline.ts --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.12 --typespecEmitter=@azure-tools/typespec-ts
