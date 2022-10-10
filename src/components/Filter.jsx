export const SearchFilter = ({ handleSetFilter = () => null }) => {
    return (
        <input onChange={(e) => handleSetFilter(e.target.value)} type="text" className="form-control col-md-8 bg-dark text-white" placeholder="search for movie name" />
    )
}