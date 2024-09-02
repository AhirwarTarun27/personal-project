import { useEffect } from 'react';
import apiClient from '../../utils/axios';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../../hooks/use-image';
import { ImageCard } from '../../components';
import { IImageData } from '../../types/home';

export const HomePage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  console.log('data:', data);

  return (
    <div>
      {!isLoading &&
        data.map((image: IImageData) => <ImageCard image={image} />)}
    </div>
  );
};
