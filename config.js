"use strict";

exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  // "mongodb://blake:blake1@ds131903.mlab.com:31903/node-capstone";
  "mongodb+srv://blake:password222@node-capstone.3r04t.mongodb.net/node-capstone?retryWrites=true&w=majority";
  // "mongodb://testuser:testpassword2@ds029824.mlab.com:29824/test-db";
exports.TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || "mongodb://localhost/testnode_capstone";
exports.PORT = process.env.PORT || 3001;

exports.JWT_SECRET = process.env.JWT_SECRET || "secret";
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || "7d";