import books from "../../assets/books.jpg";

const Banner = () => {
	return (
		<div className="hero-content flex-col lg:flex-row-reverse bg-gray-400/10 py-10 gap-10">
			<img src={books} className="max-w-sm rounded-lg shadow-2xl" />
			<div>
				<h1 className="text-5xl font-bold">
					Books to Freshen Up <br />
					Your Bookshelf!
				</h1>
				<button className="btn btn-primary mt-10">View Books</button>
			</div>
		</div>
	);
};

export default Banner;
