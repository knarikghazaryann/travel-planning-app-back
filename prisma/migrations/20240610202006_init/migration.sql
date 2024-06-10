-- DropForeignKey
ALTER TABLE "Routes" DROP CONSTRAINT "Routes_tripId_fkey";

-- AddForeignKey
ALTER TABLE "Routes" ADD CONSTRAINT "Routes_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trips"("id") ON DELETE CASCADE ON UPDATE CASCADE;
