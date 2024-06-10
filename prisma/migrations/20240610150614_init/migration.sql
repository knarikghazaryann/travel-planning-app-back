/*
  Warnings:

  - You are about to drop the column `endLocation` on the `Routes` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Routes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Routes" DROP COLUMN "endLocation",
DROP COLUMN "title";
