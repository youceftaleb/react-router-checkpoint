import { useNavigate } from 'react-router-dom';
export const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/movie/${movie.id}`)} className="card bg-dark text-light border-info text-center" style={{height:610}}>
            <div className="card-body">
                <img src={movie.posterURL} alt={movie.title} style={{ maxWidth: '70%' }} />
            </div>
            <div className="card-footer border-info">
                <h2>{movie.title}</h2>
                <h6>{movie.rating}</h6>
                <p>{movie.desc}</p>
            </div>
        </div>
    )
}