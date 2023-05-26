const useFormattedDate = (date) => {
	const isoDate = new Date(date);

	const options = { day: "numeric", month: "long", year: "numeric" };
	const formattedDate = isoDate.toLocaleDateString("en-US", options);

	return formattedDate;
};

export default useFormattedDate;
