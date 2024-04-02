/*
  Warnings:

  - You are about to drop the column `clerkId` on the `Invention` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Invention` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Invention" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "nameOfInventor" TEXT NOT NULL,
    "nameOfInvention" TEXT NOT NULL,
    "priceForApproval" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "creationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvedDate" DATETIME NOT NULL
);
INSERT INTO "new_Invention" ("approvedDate", "creationDate", "description", "id", "imagePath", "isApproved", "nameOfInvention", "nameOfInventor", "priceForApproval") SELECT "approvedDate", "creationDate", "description", "id", "imagePath", "isApproved", "nameOfInvention", "nameOfInventor", "priceForApproval" FROM "Invention";
DROP TABLE "Invention";
ALTER TABLE "new_Invention" RENAME TO "Invention";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
