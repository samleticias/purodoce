import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import { Footer } from "../components/footer";
import doceria1 from "../assets/images/doceria1.png";
import doceria2 from "../assets/images/doceria2.png";
import doceria3 from "../assets/images/doceria3.png";

const imagens = [
  { src: doceria1, alt: "Interior da PuroDoce" },
  { src: doceria2, alt: "Balcão de atendimento" },
  { src: doceria3, alt: "Vitrine de doces" },
];

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,       
    autoplaySpeed: 3000,   
  };

  return (
    <VStack spacing={8} px="2rem" py="4rem">
      <Box maxW="800px" textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="pink.600">
          Sobre a PuroDoce
        </Text>
        <Text fontSize="lg" color="gray.700">
          A <strong>PuroDoce</strong> nasceu do amor por confeitaria artesanal e pela vontade
          de entregar doces com sabor de carinho. Nosso objetivo é transformar momentos simples em experiências inesquecíveis por meio de sabores únicos, ingredientes de qualidade e um toque de afeto em cada detalhe.
        </Text>
        <Text fontSize="lg" mt={4} color="gray.700">
          Fundada por apaixonados por confeitaria, nossa doceria oferece uma linha completa de bolos,
          tortas, brigadeiros gourmet e muito mais — tudo feito sob encomenda e com muito cuidado.
        </Text>
        <Text fontSize="lg" mt={4} color="gray.700">
          Estamos sempre inovando, participando de eventos e criando novas receitas para surpreender nossos clientes.
          Do pedido online à entrega, nosso foco é sua satisfação.
        </Text>
      </Box>

      <Box maxW="800px" w="100%" textAlign="center" mt={8}>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="pink.600">
          Nosso Espaço
        </Text>
        <Slider {...settings}>
          {imagens.map(({ src, alt }, idx) => (
            <Box key={idx} px={2}>
              <img
                src={src}
                alt={alt}
                style={{ width: "100%", borderRadius: 10, objectFit: "cover" }}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box textAlign="center" mt={8}>
        <Text fontSize="lg" color="gray.700">
          📍 Rua das Flores, 123 - Bairro Jardim Primavera
        </Text>
        <Text fontSize="lg" color="gray.700">
          📍 São Paulo - SP, 04567-000
        </Text>
        <Text fontSize="lg" color="gray.700">
          📞 (11) 91234-5678
        </Text>
        <Text fontSize="lg" color="gray.700">
          🕒 Segunda a Sábado, das 9h às 18h
        </Text>
      </Box>
      
      <Footer />
    </VStack>
  );
}

export default About;