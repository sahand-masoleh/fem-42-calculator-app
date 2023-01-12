#!/usr/bin/env bash

rm -r dist && tsc && npm run build

rm -rf out && npm run make