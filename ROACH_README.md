# This app can be configured to a CockroachDB cluster deployed on Digital Ocean

1) Spin up a secure cluster according to docs

2) Populate certs/ and my-safe-directory/ 

cockroach sql --certs-dir=certs --host=104.248.111.122