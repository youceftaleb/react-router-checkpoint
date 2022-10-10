import { useState } from "react";

export const AddMovie = ({ addmovie }) => {
    const [movieTitle, setMovieTitle] = useState(null);
    const [moviePosterURL, setMoviePosterURL] = useState(null);
    const [movieRating, setMovieRating] = useState(null);
    const [movieDescription, setMovieDescription] = useState(null);
    return (
        <div className="row">
            <div className="col-md-10">
                <input type="text" onChange={(e)=>setMovieTitle(e.target.value)} placeholder="add a movie title" className="form-control bg-dark text-white" value={movieTitle ? movieTitle : ""}/>
                <input type="text" onChange={(e)=>setMoviePosterURL(e.target.value)} placeholder="add a movie poster URL" className="form-control bg-dark text-white" value={moviePosterURL ? moviePosterURL : ""}/>
                <input type="text" onChange={(e)=>setMovieRating(e.target.value)} placeholder="add a movie rating" className="form-control bg-dark text-white" value={movieRating ? movieRating : ""}/>
                <textarea onChange={(e)=>setMovieDescription(e.target.value)} placeholder="add a movie description" className="form-control bg-dark text-white" value={movieDescription ? movieDescription : ""}/>
            </div>
            <div className="col-md-2">
                <button className="btn btn-primary" onClick={() => {
                    addmovie({ movieTitle, moviePosterURL, movieRating, movieDescription });
                    setMovieTitle(null);
                    setMovieDescription(null);
                    setMoviePosterURL(null);
                    setMovieRating(null);
                }}>Add movie</button>
            </div>
        </div>
    )
}