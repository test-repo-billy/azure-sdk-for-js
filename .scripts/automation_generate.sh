#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default

file_path="../azure-rest-api-specs/branch.txt"
# Check if the file exists
if [ -f "$file_path" ]; then
    # Load the content of the file into a variable
    branch=$(cat "$file_path")
    echo "Branch file content loaded into variable."
else
    echo "Branch file does not exist."
fi
branch=$($file_path)
echo "switch to branch $branch"

cd ../..
git clone https://github.com/Azure/azure-sdk-tools/
cd azure-sdk-tools
git checkout -b test $branch
cd ../azure-sdk-for-js
pnpm install
tsx ../azure-sdk-tools/tools/js-sdk-release-tools/src/autoGenerateInPipeline.ts --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.12 --typespecEmitter=@azure-tools/typespec-ts
