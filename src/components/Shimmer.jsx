const Shimmer = () => {
    return Array(20).fill(0).map((_, index) => (
        <div className="p-5 m-5 border border-black">
            <div className="w-64 h-64 bg-gray-200"></div>
        </div>
    ))
};

export default Shimmer;