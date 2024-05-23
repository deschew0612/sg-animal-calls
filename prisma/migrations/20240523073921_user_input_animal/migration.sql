/*
  Warnings:

  - You are about to drop the `UserLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserLocation";

-- CreateTable
CREATE TABLE "UserInputAnimal" (
    "id" SERIAL NOT NULL,
    "animal" TEXT NOT NULL,
    "timeInput" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserInputAnimal_pkey" PRIMARY KEY ("id")
);
