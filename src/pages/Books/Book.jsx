import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
	const { bookId, bookName, author, image, tags, rating, category } =
		singleBook;

	return (
		<Link to={`/book-details/${bookId}`}>
			<div className="card bg-base-100 w-96 shadow-md p-6 border border-[#131313]/15 ">
				<figure className="bg-[#F3F3F3] rounded-2xl h-[230px] p-10">
					<img
						className=" rounded-sm w-[134px] h-[166px]"
						src={image}
						alt="Shoes"
					/>
				</figure>

				<div className="card-body mt-6">
					<div className="card-actions justify-start ">
						{tags.map((tag, idx) => (
							<div
								className="badge badge-outline  bg-[#23BE0A]/10 text-[#23BE0A] border-0  "
								key={idx}
							>
								{tag}
							</div>
						))}
					</div>
					<div className="mt-3">
						<h2 className="card-title">{bookName}</h2>
						<p>By : {author}</p>
					</div>
					<hr className="border-dashed opacity-10" />
				</div>
				<div className="flex  justify-between mx-6">
					<p>{category}</p>
					<p className="flex items-center gap-2 ">
						{rating}
						<span className="">
							<Star size={20} />
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Book;
