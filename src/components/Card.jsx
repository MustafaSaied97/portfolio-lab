import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      spacing={5}
      align='start'
      bg='white'
      borderRadius='7px'
    >
      <Image
        borderRadius='5px'
        width='100%'
        objectFit='cover'
        src={imageSrc}
        alt={title}
      />
      <VStack 
      spacing={5}
      align='start'
      bg='white'
      color='black'
      p={5}
      borderRadius='7px'

      >
        <Heading as='h5' size='sm'  >{title}</Heading>
        <Text fontSize='md'  color='gray' >{description}</Text>
        <HStack  align='center' >
        <Text fontSize='sm' >see more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    
    </VStack>
  );
};

export default Card;
