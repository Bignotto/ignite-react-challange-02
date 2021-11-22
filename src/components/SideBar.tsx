import { useState } from "react"
import { Button } from "./Button"
import "../styles/sidebar.scss"

interface MovieGenre {
  id: number
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family"
  title: string
}
interface MoviesGenresProps {
  genres: MovieGenre[]
  setSelectedFunction: (genreId: number) => void
}

export function SideBar({ genres, setSelectedFunction }: MoviesGenresProps) {
  // Complete aqui
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
    setSelectedFunction(id)
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

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
