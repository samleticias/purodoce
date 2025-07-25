import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { apiCep } from "../../services/apiCep";
import { Input } from "../input";

export const PersonalData = () => {
  const [cep, setCep] = useState<string>()
  const [street, setStreet] = useState<string>()

  useEffect(() => {
    if (
      cep?.length === 9 &&
      Number(cep.split("-")[1])
    ) {
      apiCep.get(`${cep}/json/`).then((response: { data: { erro: any; logradouro: any; }; }) => {
        setStreet(response.data.logradouro);
        }
      )}
  }, [cep]);

  return (
    <Stack w="100%">
      <Stack
        direction={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        w="100%"
      >
        <Input
          label="CPF"
          type="text"
          placeholder="CPF"
          mask="999.999.999-99"
          required
        />
        <Input
          label="Nome Completo"
          placeholder="Nome"
          type="text"
          required
        />
      </Stack>
      <Stack
        direction={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        w="100%"
      >
        <Input
          label="Data de Nascimento"
          type="date"
          required
        />
        <Input
          label="Email"
          type="email"
          placeholder="exemplo@exemplo"
          required
        />
        <Input
          label="Celular"
          type="text"
          placeholder="+55 (99) 99999-9999"
          mask="+55 (99) 99999-9999"
          required
        />
      </Stack>
      <Stack
        direction={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        w="100%"
      >
        <Input
          label="CEP"
          type="text"
          placeholder="99999-999"
          mask="99999-999"
          required
          onChange={(e: any) => {setCep(e.target.value)}}
        />
        <Input
          label="Logradouro"
          placeholder="Logradouro"
          type="text"
          isDisabled
          value={street}
          required
        />
      </Stack>
      <Stack
        direction={{
          base: "column",
          md: "row",
          lg: "row",
        }}
        w="100%"
      >
        <Input
          label="Número"
          type="number"
          placeholder="9999"
          required
        />
        <Input
          label="Complemento"
          placeholder="Ex: Apartamento 34 bloco H"
          type="text"
        />
      </Stack>
    </Stack>
  );
};