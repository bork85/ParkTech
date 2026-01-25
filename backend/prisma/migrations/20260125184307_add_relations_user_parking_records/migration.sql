/*
  Warnings:

  - Added the required column `entryUserID` to the `ParkingRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ParkingRecord" ADD COLUMN     "entryUserID" TEXT NOT NULL,
ADD COLUMN     "exitUserId" TEXT;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_entryUserID_fkey" FOREIGN KEY ("entryUserID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParkingRecord" ADD CONSTRAINT "ParkingRecord_exitUserId_fkey" FOREIGN KEY ("exitUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
