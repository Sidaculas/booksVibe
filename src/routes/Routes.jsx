import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BooksDetails from "../pages/Books/BooksDetails";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Root,

		errorElement: <ErrorPage />,

		children: [
			{
				index: true,
				loader: () => fetch("/booksData.json"),
				path: "/",
				Component: Home,
			},
			{
				path: "/book-details/:bookId",
				loader: async ({ params }) => {
					const res = await fetch("/booksData.json");
					const books = await res.json();
					const book = books.find((b) => b.bookId.toString() === params.bookId);
					if (!book) throw new Response("Book not found", { status: 404 });
					return book;
				},
				Component: BooksDetails,
			},
			{
				path: "/listed-books",
				loader: () => fetch("/booksData.json"),
				Component: ListedBooks,
			},
			{
				path: "/pages-to-read",
				loader: () => fetch("/booksData.json"),
				Component: PagesToRead,
			},
		],
	},
]);
