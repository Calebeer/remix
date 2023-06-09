/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Password` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Note` DROP FOREIGN KEY `Note_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Password` DROP FOREIGN KEY `Password_userId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `age`,
    DROP COLUMN `endereco`,
    DROP COLUMN `sex`,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Note`;

-- DropTable
DROP TABLE `Password`;
