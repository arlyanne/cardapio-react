import React from 'react';
import { Box, Text, Icon, } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      onImageChange(file);
    }
  };

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event) => {
      const file = event.target.files?.[0];
      if (file) {
        onImageChange(file);
      }
    };
    input.click();
  };

  return (
    <Box
      border="2px dashed"
      borderColor="#480e1f"
      borderRadius="sm"
      p={4}
      textAlign="center"
      onClick={handleClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      cursor="pointer"
    >
      <Icon as={MdAdd} boxSize={8} color="#480e1f" />
      {/* <Text fontSize="sm" color="gray.600" mt={2}>
        Clique ou arraste a imagem aqui
      </Text> */}
      <Text fontSize="md" >
        JPG, PNG
      </Text>
    </Box>
  );
};

export default ImageUpload;
