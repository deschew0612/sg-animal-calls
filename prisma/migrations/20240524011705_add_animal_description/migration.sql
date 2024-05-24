/*
  Warnings:

  - Added the required column `description` to the `UserInputAnimal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserInputAnimal" ADD COLUMN     "description" TEXT NOT NULL;
