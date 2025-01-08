/*
  Warnings:

  - You are about to drop the column `Gender` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[supabaseId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supabaseId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Gender",
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "supabaseId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseId_key" ON "User"("supabaseId");
