import { Box, Flex, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { Card } from "../components/card";
import { CatalogItem } from "../types/products";
import { carregarItens } from "../utils/catalogItems"; 
import banner from "../assets/banner.png";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarItens()
      .then((dados) => setItems(dados))
      .catch((err) => {
        console.error(err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Text>Carregando catálogo...</Text>;

  return (
    <Box>
      <Box w="100%" mt="0.25rem">
        <Image src={banner} alt="banner" />
      </Box>

      <Flex m="2rem 0" justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize={30}>Catálogo</Text>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        {items.map((item: CatalogItem) => (
          <GridItem key={item.id}>
            <Card
              id={item.id}
              name={item.name}
              image={item.image}
              details={item.details}
              price={item.price}
            />
          </GridItem>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
}

export default Home;