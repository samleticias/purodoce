/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "cpf" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClienteEndereco" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "enderecoId" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "ClienteEndereco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClienteEndereco_clientId_enderecoId_key" ON "ClienteEndereco"("clientId", "enderecoId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_cpf_key" ON "Client"("cpf");

-- AddForeignKey
ALTER TABLE "ClienteEndereco" ADD CONSTRAINT "ClienteEndereco_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClienteEndereco" ADD CONSTRAINT "ClienteEndereco_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
