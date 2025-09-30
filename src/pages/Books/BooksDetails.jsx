import React from "react";
import { useLoaderData } from "react-router";

import { toast, ToastContainer } from "react-toastify";
import { addToReadingList, addToWishList } from "../../utils/db";

const BooksDetails = () => {
	const book = useLoaderData();
	if (!book) return <p>Book not found</p>;
	const {
		bookId,
		author,
		bookName,
		category,
		image,
		publisher,
		rating,
		review,
		tags,
		totalPages,
		yearOfPublishing,
	} = book;

	const handleMarkAsRead = (id) => {
		const res = addToReadingList(id);
		if (res) {
			toast.error("Already Read");
		} else {
			toast.success("Marked as Read");
		}
		return;
	};
	const handleAddToWishList = (id) => {
		const res = addToWishList(id);
		if (res) {
			toast.error("Already added to Wishlist");
		} else {
			toast.success("Added to Wishlist");
		}
		return;
	};
	return (
		<div className="flex flex-col md:flex-row items-center justify-between gap-10 ">
			<figure className="bg-[#F3F3F3] rounded-2xl w-1/2 p-20 flex items-center justify-center h-auto">
				<img className=" rounded-md w-full" src={image} alt={bookName} />
			</figure>
			<div className="w-1/2 mt-10">
				<h1 className="text-4xl font-black">{bookName}</h1>
				<p className="text-2xl text-[#131313]/70 my-6">By : {author}</p>
				<hr className="text-[#131313]/10" />
				<p className="text-[#131313] my-3 text-lg">{category}</p>
				<hr className="text-[#131313]/10" />
				<p className="leading-7 my-6 ">
					<span className="text-lg font-black">Review: </span>
					<span className="text-[#131313]/70">{review}</span>
				</p>
				<div className="flex items-center w-1/2 gap-5 my-6">
					<p className="font-black text-lg">Tag</p>

					{tags.map((tags, i) => (
						<p
							className="badge badge-outline bg-[#23BE0A]/10 text-[#23BE0A] border-0"
							key={i}
						>
							#{tags}
						</p>
					))}
				</div>
				<hr className="text-[#131313]/10" />
				<div className="mt-6">
					<table>
						<tbody>
							<tr className="hover:bg-gray-50">
								<td className="px-4 py-2 text-gray-600/80">Number of Pages:</td>
								<td className="px-4 py-2 font-semibold">{totalPages}</td>
							</tr>
							<tr className="hover:bg-gray-50">
								<td className="px-4 py-2  text-gray-600/80">Publisher:</td>
								<td className="px-4 py-2 font-semibold">{publisher}</td>
							</tr>
							<tr className="hover:bg-gray-50">
								<td className="px-4 py-2  text-gray-600/80">
									Year of Publishing:
								</td>
								<td className="px-4 py-2 font-semibold">{yearOfPublishing}</td>
							</tr>
							<tr className="hover:bg-gray-50">
								<td className="px-4 py-2  text-gray-600/80">Rating:</td>
								<td className="px-4 py-2 font-semibold">{rating}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="mt-6 flex gap-4">
					<button
						onClick={() => handleMarkAsRead(bookId)}
						className="btn btn-lg rounded-lg border border-black/20 bg-white"
					>
						Mark as Read
					</button>
					<button
						onClick={() => handleAddToWishList(bookId)}
						className="btn btn-lg bg-[#50B1C9] text-white rounded-lg"
					>
						Add to Wishlist
					</button>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default BooksDetails;
