/*
  Warnings:

  - The values [ADMIN] on the enum `RoleName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleName_new" AS ENUM ('APPLICANT', 'CONTRACTOR', 'TEAM_LEAD', 'QUARTERMASTER', 'QUARTERMASTER_ADMIN', 'SITE_ADMIN', 'RECRUITER');
ALTER TABLE "Role" ALTER COLUMN "name" TYPE "RoleName_new" USING ("name"::text::"RoleName_new");
ALTER TYPE "RoleName" RENAME TO "RoleName_old";
ALTER TYPE "RoleName_new" RENAME TO "RoleName";
DROP TYPE "RoleName_old";
COMMIT;
