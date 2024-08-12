#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default

cd ..
file_path="azure-rest-api-specs/branch.txt"
# Check if the file exists
if [ -f "$file_path" ]; then
    # Load the content of the file into a variable
    branch=$(cat "$file_path")
    echo "switch to branch $branch"
else
    echo "Branch file does not exist."
fi

git clone https://github.com/Azure/azure-sdk-tools/

cd azure-sdk-tools
if [ -f "$file_path" ]; then
    git checkout -b test $branch
fi
git status

echo '-------------- list folders'
ls

cd ../azure-sdk-for-js_tmp
npm install
tsx ../azure-sdk-tools/tools/js-sdk-release-tools/src/autoGenerateInPipeline.ts --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.12 --typespecEmitter=@azure-tools/typespec-ts
