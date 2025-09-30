export const getReadingList = () => {
	const storedBooks = localStorage.getItem("readingList");
	return storedBooks ? JSON.parse(storedBooks) : [];
};

export const addToReadingList = (id) => {
	const bookList = getReadingList();
	if (bookList.includes(id)) {
		return 1;
	} else {
		bookList.push(id);
		const data = JSON.stringify(bookList);
		localStorage.setItem("readingList", data);
		return 0;
	}
};

export const getWishList = () => {
	const storedBooks = localStorage.getItem("wishList");
	return storedBooks ? JSON.parse(storedBooks) : [];
};

export const addToWishList = (id) => {
	const bookList = getWishList();
	if (bookList.includes(id)) {
		return 1;
	} else {
		bookList.push(id);
		const data = JSON.stringify(bookList);
		localStorage.setItem("wishList", data);
		return 0;
	}
};
