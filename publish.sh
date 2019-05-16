#!/bin/bash

beta=0;

while [[ "$#" -gt 0 ]]; do case $1 in
  -b|--beta) beta=1;;
  *) echo "Unknown parameter passed: $1"; exit 1;;
esac; shift; done

if [[ $beta == 1 ]] 
    then
        npm run publish-pkg -- --tag "beta"
else
    npm run publish-pkg
fi
