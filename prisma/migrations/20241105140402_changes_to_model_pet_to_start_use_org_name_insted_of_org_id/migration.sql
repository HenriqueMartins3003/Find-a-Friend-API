/*
  Warnings:

  - You are about to drop the column `org_id` on the `pets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `org` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `org_name` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_org_id_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "org_id",
ADD COLUMN     "org_name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "org_name_key" ON "org"("name");

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_org_name_fkey" FOREIGN KEY ("org_name") REFERENCES "org"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
