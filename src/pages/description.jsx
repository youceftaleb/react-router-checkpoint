import { useParams, Link } from 'react-router-dom';
import { movies } from '../data'
const MovieDescriptionPage = () => {
    const params = useParams();
    const findMovie = movies.find((movie) => movie.id === params.id);
    return (
        <div className="container-fluid">
            <div className="card">
                <div className="card-body">
                    <iframe
                        width="900"
                        height="506"
                        src={findMovie.trailerSrc}
                        title={findMovie.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
                <div className="card-footer">
                    <p>{findMovie.desc}</p>
                    <Link to="/">return to home page</Link>
                </div>
            </div>
        </div>
    )
}
export default MovieDescriptionPage;