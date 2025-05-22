import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  useColorModeValue,
  Container,
  Select,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  
  // Sample products data with actual images from public directory
  const sampleProducts = [
    {
      id: '1',
      name: 'Compact Powder',
      price: 24.99,
      description: 'Matte finish compact powder for all-day wear',
      category: 'face',
      image: '/productimages/compact.png',
    },
    {
      id: '2',
      name: 'Eyeshadow Palette',
      price: 34.99,
      description: '12-shade eyeshadow palette with matte and shimmer finishes',
      category: 'eyes',
      image: '/productimages/eyeshadowpallete.png',
    },
    {
      id: '3',
      name: 'Liquid Foundation',
      price: 29.99,
      description: 'Full coverage foundation with natural finish',
      category: 'face',
      image: '/productimages/foundation.png',
    },
    {
      id: '4',
      name: 'Gleaming Highlighter Stick',
      price: 19.99,
      description: 'Creamy highlighter for a dewy glow',
      category: 'face',
      image: '/productimages/gleamingstick.png',
    },
    {
      id: '5',
      name: 'Lip Glaze',
      price: 16.99,
      description: 'High-shine lip glaze with non-sticky formula',
      category: 'lips',
      image: '/productimages/lipglaze.png',
    },
    {
      id: '6',
      name: 'Lip Gloss',
      price: 14.99,
      description: 'Plumping lip gloss with vitamin E',
      category: 'lips',
      image: '/productimages/lipgloss.png',
    },
    {
      id: '7',
      name: 'Volume Mascara',
      price: 22.99,
      description: 'Lengthening and volumizing mascara',
      category: 'eyes',
      image: '/productimages/mascara.png',
    },
  ];

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // First try to fetch from Firebase
        const productsCollection = collection(database, "products");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // If Firebase returns products, use them, otherwise use sample data
        if (productsList.length > 0) {
          setProducts(productsList);
        } else {
          setProducts(sampleProducts);
          console.log('Using sample products as no data found in Firebase');
        }
      } catch (error) {
        console.error("Error fetching products, using sample data:", error);
        // If there's an error with Firebase, use the sample products
        setProducts(sampleProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  const handleAddToCart = (product) => {
    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // Increment quantity if product already in cart
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // Add new product to cart with quantity 1
      existingCart.push({
        ...product,
        quantity: 1,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Optional: Show a toast notification
    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return (
      <Container maxW="container.xl" py={10}>
        <Flex justify="center" align="center" h="50vh">
          <Text fontSize="xl">Loading products...</Text>
        </Flex>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={8} textAlign="center">
        Our Products
      </Heading>

      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="lg">Showing {filteredProducts.length} products</Text>
        <Select
          width="200px"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="skincare">Skincare</option>
          <option value="makeup">Makeup</option>
          <option value="haircare">Haircare</option>
          <option value="fragrance">Fragrance</option>
        </Select>
      </Flex>

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            borderColor={borderColor}
            bg={bgColor}
            transition="transform 0.3s ease"
            _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              height="250px"
              width="100%"
              objectFit="cover"
            />

            <Box p={5}>
              <Flex justify="space-between" align="center" mb={2}>
                <Heading as="h3" size="md">
                  {product.name}
                </Heading>
                <Badge colorScheme="pink">{product.category}</Badge>
              </Flex>

              <Text color={textColor} mb={4} noOfLines={2}>
                {product.description}
              </Text>

              <Flex justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="xl">
                  ${product.price.toFixed(2)}
                </Text>
                <Button
                  colorScheme="pink"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>

      {filteredProducts.length === 0 && (
        <Flex justify="center" align="center" h="200px">
          <Text fontSize="xl">No products found in this category.</Text>
        </Flex>
      )}
    </Container>
  );
};

export default ProductsPage;
