// src/core/utils.ts
import crypto from "crypto";
import "server-only";
import { UserData } from "../types";

// Function to hash PII according to Meta's requirements (SHA-256)
function sha256(input: string): string {
  return crypto
    .createHash("sha256")
    .update(input.trim().toLowerCase())
    .digest("hex");
}

// Hashes sensitive fields within the UserData object
export function hashUserData(userData: UserData): UserData {
  const hashedData: UserData = { ...userData }; // Clone to avoid modifying original

  if (hashedData.em) hashedData.em = sha256(hashedData.em);
  if (hashedData.ph)
    hashedData.ph = sha256(hashedData.ph.replace(/[^0-9]/g, "")); // Clean phone number before hashing
  if (hashedData.fn) hashedData.fn = sha256(hashedData.fn);
  if (hashedData.ln) hashedData.ln = sha256(hashedData.ln);
  if (hashedData.ge) hashedData.ge = sha256(hashedData.ge.substring(0, 1)); // 'm' or 'f'
  if (hashedData.db)
    hashedData.db = sha256(hashedData.db.replace(/[^0-9]/g, "")); // YYYYMMDD format expected
  if (hashedData.ct) hashedData.ct = sha256(hashedData.ct);
  if (hashedData.st) hashedData.st = sha256(hashedData.st);
  if (hashedData.zp) hashedData.zp = sha256(hashedData.zp);
  if (hashedData.country) hashedData.country = sha256(hashedData.country);
  // external_id should typically NOT be hashed, but confirm Meta docs for specifics

  // Remove potentially null/undefined values after hashing attempt if original was absent
  Object.keys(hashedData).forEach((key) => {
    if (
      hashedData[key as keyof UserData] === undefined ||
      hashedData[key as keyof UserData] === null
    ) {
      delete hashedData[key as keyof UserData];
    }
  });

  return hashedData;
}
