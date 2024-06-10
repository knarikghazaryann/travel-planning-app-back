/*
  Warnings:

  - You are about to drop the column `startLocation` on the `Routes` table. All the data in the column will be lost.
  - Added the required column `location` to the `Routes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Routes" DROP COLUMN "startLocation",
ADD COLUMN     "location" TEXT NOT NULL;
