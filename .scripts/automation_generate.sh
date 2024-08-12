#!/usr/bin/env bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm use default

cd ..

echo '-------------- pwd start'
pwd
echo '-------------- pwd end'
echo '-------------- list root start'
ls
echo '-------------- list root end'

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

echo '-------------- git status start'
git status
echo '-------------- git status end'


cd tools/js-sdk-release-tools
npm install
cd ../../..

echo '-------------- pwd start'
pwd
echo '-------------- pwd end'

echo '-------------- list root start'
ls
echo '-------------- list root end'

cd azure-sdk-for-js
npm install
tsx ../azure-sdk-tools/tools/js-sdk-release-tools/src/autoGenerateInPipeline.ts --inputJsonPath=$1 --outputJsonPath=$2 --use=@autorest/typescript@^6.0.12 --typespecEmitter=@azure-tools/typespec-ts
