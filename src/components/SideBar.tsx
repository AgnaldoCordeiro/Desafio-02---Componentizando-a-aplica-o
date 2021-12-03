import { Button } from '../components/Button';
import '../styles/sidebar.scss';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SidebarProps {
  genres: Genre[];
  selectedGenreId: number;
  handleClickButton: Function
}
  
export function SideBar({genres, selectedGenreId, handleClickButton}: SidebarProps) {
 
  return (
     <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}              
              selected={selectedGenreId === genre.id}
            />          
          ))}
        </div>

      </nav>
  )
}

