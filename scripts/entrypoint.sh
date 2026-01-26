#!/bin/bash

echo "Executing test suite: $TEST_SUITE"

if [ "$TEST_SUITE" = "service-request" ]; then
  echo "Running Service Request specs"
  npx playwright test \
    tests/e2e_ecommerce.spec.js \
    tests/iframae.spec.js

elif [ "$TEST_SUITE" = "service-shop" ]; then
  echo "Running Service Shop specs"
  npx playwright test \
    tests/login.spec.js \
    tests/signup.spec.js

else
  echo "ERROR: Unknown TEST_SUITE = $TEST_SUITE"
  exit 1
fi
