import { Suspense } from "react";
import Book from "./Book";

const Books = ({ books }) => {
	if (!books) {
		return <span className="loading loading-infinity loading-xl"></span>;
	}

	return (
		<div className="my-10 ">
			<h1 className="text-3xl text-center p-6 font-extrabold">Books</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{books.map((book, index) => (
					<Book key={index} singleBook={book} />
				))}
			</div>
		</div>
	);
};

export default Books;
