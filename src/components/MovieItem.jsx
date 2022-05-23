export function MovieItem ({ image, title }) {
    return (
        <>
        
            <div className="column is-2">
                <img src={image} alt={title} />
                <p className="has-text-white">{title}</p>
            </div>
        
        </>
    )
}