import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../@types/GenreResponse';
import { MovieProps } from '../@types/Movie';
import { api } from '../services/api';

export default function useIndex() {
  const [selectedGenreId, setSelectedGenreId] = useState(1),
    [genres, setGenres] = useState<GenreResponseProps[]>([]),
    [movies, setMovies] = useState<MovieProps[]>([]),
    [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }


  return {
    selectedGenreId,
    genres,
    movies,
    selectedGenre,
    handleClickButton,
  };
  
}