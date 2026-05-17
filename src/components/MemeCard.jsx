const MemeCard = ({ url, author }) => {
    return (
        <div className="p-5 m-5 border border-black">
            <img src={url} className="w-64 h-64" alt='meme' />
            <p>{author}</p>
        </div>
    )
};

export default MemeCard;