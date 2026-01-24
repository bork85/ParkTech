-- CreateEnum
CREATE TYPE "FractionalTimes" AS ENUM ('NONE', 'MINUTES_30', 'MINUTES_15', 'MINUTES_10', 'MINUTES_05');

-- CreateTable
CREATE TABLE "PriceConfig" (
    "id" TEXT NOT NULL,
    "firstHourPrice" DECIMAL(65,30) NOT NULL,
    "additionalHourPrice" DECIMAL(65,30) NOT NULL,
    "permitFractionalTime" BOOLEAN NOT NULL DEFAULT false,
    "fractionalTime" "FractionalTimes" NOT NULL DEFAULT 'NONE',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PriceConfig_pkey" PRIMARY KEY ("id")
);
