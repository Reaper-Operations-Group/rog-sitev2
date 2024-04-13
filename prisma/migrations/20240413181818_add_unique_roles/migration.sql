/*
  Warnings:

  - A unique constraint covering the columns `[userId,roleId]` on the table `UserRoles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserRoles_userId_roleId_key" ON "UserRoles"("userId", "roleId");
