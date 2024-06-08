/*
  Warnings:

  - You are about to drop the column `tripId` on the `Files` table. All the data in the column will be lost.
  - Added the required column `folderId` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_tripId_fkey";

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "tripId",
ADD COLUMN     "folderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_folderId_fkey" FOREIGN KEY ("folderId") REFERENCES "Folders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
