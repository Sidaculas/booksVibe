import { FileChartColumnIncreasing, MapPin, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BookList = ({ book }) => {
	return (
		<div className="p-4">
			<div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row my-6 p-4 border border-black/20">
				<figure className="w-[230px] bg-[#131313]/10 py-10 rounded-md">
					<img className="w-[150px] rounded-md" src={book.image} alt="Movie" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-2xl font-black">{book.bookName}</h2>
					<p
						className="font-semibold
                "
					>
						By: {book.author}
					</p>
					<div className="flex md:items-center flex-col w-2/3 gap-5 md:flex-row">
						<span className="text-lg font-semibold">Tag</span>
						{book.tags.map((tags, i) => (
							<p
								className="badge badge-outline bg-[#23BE0A]/10 text-[#23BE0A] border-0 rounded-2xl"
								key={i}
							>
								#{tags}
							</p>
						))}
						<p className="flex gap-2 text-gray-500">
							<MapPin />
							Year of Publishing: {book.yearOfPublishing}
						</p>
					</div>
					<div className="flex my-2 gap-10 text-sm text-gray-500">
						<span className="flex items-center gap-2">
							<Users /> Publisher: {book.publisher}
						</span>
						<span className="flex gap-2 items-center">
							<FileChartColumnIncreasing /> Page: {book.totalPages}
						</span>
					</div>
					<hr className="text-[#131313]/10" />
					<div className=" flex flex-col md:flex-row gap-5 items-center  justify-start mt-3 w-full md:w-2/3">
						<p className="badge bg-[#328EFF]/10 text-[#328EFF]/90 border-0 rounded-3xl text-xs font-medium px-5 py-5">
							Category: {book.category}
						</p>
						<p className="badge bg-[#FFAC33]/10 text-[#FFAC33]/90 border-0 rounded-3xl text-xs font-medium px-5 py-5">
							Rating: {book.rating}
						</p>
						<Link to={`/book-details/${book.bookId}`}>
							<button className="btn bg-[#23BE0A]/80 text-white rounded-3xl font-medium text-xs px-5">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookList;
