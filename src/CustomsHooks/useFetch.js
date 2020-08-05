//React and Hooks

import { useState, useEffect } from "react";


//Custom Hook For Fetch

function useFetch(url) {
	const [data, setData] = useState(url);
	
	useEffect(() => {
		getData();
		async function getData() {
			try {
				const response = await fetch(url);
				const data = await response.json();
				setData(data);
			}
			catch (e) {
				console.error(e);
			}
		}
		
	}, [url]);
	
	if (!data) return null;
	
	return data;
}

export default useFetch;