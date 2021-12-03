import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';
import useIndex from './hooks/useIndex';


export function App() {
  const {
     selectedGenreId,
    genres,
    movies,
    selectedGenre,
    handleClickButton,
  } = useIndex()
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar  genres={genres} selectedGenreId={selectedGenreId} handleClickButton={handleClickButton}/>
      <Content selectedGenre={selectedGenre} movies={movies}/>
      
    </div>
  )
}