/*
  Warnings:

  - Added the required column `enderecoId` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "enderecoId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
