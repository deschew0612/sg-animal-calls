-- CreateTable
CREATE TABLE "UserLocation" (
    "id" SERIAL NOT NULL,
    "animal" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "timeInput" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLocation_pkey" PRIMARY KEY ("id")
);
