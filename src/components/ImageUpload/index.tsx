import React, { useState } from 'react';
import { Box, Text, Icon, Image } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

interface ImageUploadProps {
  onImageChange: (file: string | null) => void;
}

export function ImageUpload ({ onImageChange }: ImageUploadProps)  {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    
    if (file && validateFile(file)) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result as string; 
        onImageChange(base64String);
        setPreview(URL.createObjectURL(file)); 
        setError(null);
      };
  
      reader.onerror = () => {
        setError("Erro ao ler o arquivo."); 
      };
  
      reader.readAsDataURL(file); 
    }
  };
  

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file && validateFile(file)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string; 
          onImageChange(base64String); // Envia a string Base64
          setPreview(URL.createObjectURL(file)); // Para a prévia
          setError(null);
        };

        reader.onerror = () => {
          setError("Erro ao ler o arquivo."); 
        };

        reader.readAsDataURL(file); // Lê o arquivo como Data URL
      }
    };
    input.click();
  };

  const validateFile = (file: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setError('Por favor, envie uma imagem nos formatos JPG, PNG ou GIF.');
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('A imagem deve ter no máximo 5MB.');
      return false;
    }
    return true;
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
      {preview ? (
        <Image src={preview} alt="Prévia da imagem" boxSize="150px" objectFit="cover" />
      ) : (
        <>
          <Icon as={MdAdd} boxSize={8} color="#480e1f" />
          <Text fontSize="md">JPG, PNG, GIF</Text>
        </>
      )}
      {error && <Text color="red.500" fontSize="sm">{error}</Text>}
    </Box>
  );
};
