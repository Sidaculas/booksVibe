import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadingList, getWishList } from "../../utils/db";
import { useEffect, useState } from "react";
import BookList from "../../pages/Books/BookList";

const ListedBooks = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [books, setBooks] = useState([]);
	const [wishBooks, setWishBooks] = useState([]);
	const [sort, setSort] = useState("");
	const data = useLoaderData();
	const readingList = getReadingList();
	const wishList = getWishList();

	useEffect(() => {
		const bookList = data.filter((book) => readingList.includes(book.bookId));
		setBooks(bookList);
	}, []);

	useEffect(() => {
		const bookWishList = data.filter((book) => wishList.includes(book.bookId));

		setWishBooks(bookWishList);
	}, []);

	const handleSort = (type) => {
		setSort(type);
		if (activeTab === 0) {
			// Reading list
			if (type === "pages") {
				setBooks([...books].sort((a, b) => a.totalPages - b.totalPages));
			}
			if (type === "rating") {
				setBooks([...books].sort((a, b) => b.rating - a.rating));
			}
		} else {
			// Wish list
			if (type === "pages") {
				setWishBooks(
					[...wishBooks].sort((a, b) => a.totalPages - b.totalPages)
				);
			}
			if (type === "rating") {
				setWishBooks([...wishBooks].sort((a, b) => b.rating - a.rating));
			}
		}
	};

	console.log(activeTab);

	return (
		<div>
			<div>
				<details className="dropdown flex flex-col items-center justify-center my-6">
					<summary className="btn m-1 bg-green-500/80 mx-auto rounded-2xl">
						Sort by {sort ? `: ${sort}` : ""}
					</summary>
					<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
						<li>
							<a onClick={() => handleSort("pages")}>Pages</a>
						</li>
						<li>
							<a onClick={() => handleSort("rating")}>Rating</a>
						</li>
					</ul>
				</details>
				<Tabs
					selectedIndex={activeTab}
					onSelect={(index) => setActiveTab(index)}
				>
					<TabList>
						<Tab>My Reading List</Tab>
						<Tab>My Wish List</Tab>
					</TabList>

					<TabPanel>
						{books.map((book) => (
							<BookList key={book.bookId} book={book} />
						))}
					</TabPanel>
					<TabPanel>
						{wishBooks.map((book) => (
							<BookList key={book.bookId} book={book} />
						))}
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default ListedBooks;
