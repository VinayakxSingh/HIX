import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Grid,
  Divider,
  useColorModeValue,
  IconButton,
  VStack,
  HStack,
  Input,
  useToast
} from '@chakra-ui/react';
import { MdAdd, MdRemove, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    setLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, loading]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const clearCart = () => {
    setCartItems([]);
    
    toast({
      title: "Cart cleared",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  if (loading) {
    return (
      <Container maxW="container.xl" py={10}>
        <Flex justify="center" align="center" h="50vh">
          <Text fontSize="xl">Loading cart...</Text>
        </Flex>
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="center" justify="center" h="50vh">
          <Heading>Your Cart is Empty</Heading>
          <Text fontSize="lg">Looks like you haven't added any products to your cart yet.</Text>
          <Button 
            as={Link} 
            to="/products" 
            colorScheme="pink" 
            size="lg"
          >
            Continue Shopping
          </Button>
        </VStack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={8}>Shopping Cart</Heading>
      
      <Grid templateColumns={{ base: "1fr", lg: "3fr 1fr" }} gap={8}>
        <Box>
          {/* Cart Items */}
          <VStack spacing={4} align="stretch">
            {cartItems.map(item => (
              <Flex 
                key={item.id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={borderColor}
                bg={bgColor}
                align="center"
                justify="space-between"
              >
                <HStack spacing={4}>
                  <Image 
                    src={item.imageUrl} 
                    alt={item.name}
                    boxSize="100px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                  
                  <VStack align="start" spacing={1}>
                    <Heading size="md">{item.name}</Heading>
                    <Text color="gray.500">${item.price.toFixed(2)}</Text>
                  </VStack>
                </HStack>
                
                <HStack>
                  <HStack>
                    <IconButton
                      icon={<MdRemove />}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      size="sm"
                    />
                    <Input
                      value={item.quantity}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) {
                          updateQuantity(item.id, val);
                        }
                      }}
                      width="50px"
                      textAlign="center"
                    />
                    <IconButton
                      icon={<MdAdd />}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                      size="sm"
                    />
                  </HStack>
                  
                  <Text fontWeight="bold" minWidth="80px" textAlign="right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                  
                  <IconButton
                    icon={<MdDelete />}
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                    colorScheme="red"
                    variant="ghost"
                  />
                </HStack>
              </Flex>
            ))}
          </VStack>
          
          <Flex justify="flex-end" mt={4}>
            <Button 
              onClick={clearCart} 
              colorScheme="red" 
              variant="outline"
            >
              Clear Cart
            </Button>
          </Flex>
        </Box>
        
        {/* Order Summary */}
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          borderColor={borderColor}
          bg={bgColor}
          height="fit-content"
        >
          <Heading size="md" mb={4}>Order Summary</Heading>
          
          <VStack spacing={3} align="stretch">
            <Flex justify="space-between">
              <Text>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</Text>
              <Text>${calculateSubtotal().toFixed(2)}</Text>
            </Flex>
            
            <Flex justify="space-between">
              <Text>Tax (10%)</Text>
              <Text>${calculateTax().toFixed(2)}</Text>
            </Flex>
            
            <Divider my={2} />
            
            <Flex justify="space-between" fontWeight="bold">
              <Text>Total</Text>
              <Text>${calculateTotal().toFixed(2)}</Text>
            </Flex>
            
            <Button 
              colorScheme="pink" 
              size="lg" 
              mt={4}
              onClick={() => {
                toast({
                  title: "Order placed!",
                  description: "Your order has been successfully placed.",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
                setCartItems([]);
              }}
            >
              Checkout
            </Button>
            
            <Button 
              as={Link} 
              to="/products" 
              variant="outline" 
              mt={2}
            >
              Continue Shopping
            </Button>
          </VStack>
        </Box>
      </Grid>
    </Container>
  );
};

export default CartPage;
