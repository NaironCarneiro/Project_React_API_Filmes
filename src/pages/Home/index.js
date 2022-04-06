import { Container, MovieList, Movie } from "./styles";

function Home(){

    const movies = [
        {
        id:1,
        title:'Spider Man',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'
        },
        {
        id:2,
        title:'Venum',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'

        },
        {
        id:3,
        title:'Doctor',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'

        },
        {
        id:1,
        title:'Spider Man',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'
        },
        {
        id:2,
        title:'Venum',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'

        },
        {
        id:3,
        title:'Doctor',
        image_url:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/00/Spider-Man_No_Way_Home_poster.jpg/250px-Spider-Man_No_Way_Home_poster.jpg'
        }
]

    return(
        <Container>
        <h1>Movies</h1>
        <MovieList>
            {movies.map(movie => {
                return(
                    <Movie key={movie.id}>
                    <a href="https://github.com/NaironCarneiro"><img src={movie.image_url} alt={movie.title} /></a>
                    <span>{movie.title}</span>
                    </Movie>
                )
            })}
        </MovieList>
        </Container>  
    )
}export default Home;