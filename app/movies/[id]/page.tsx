async function getMovie() {
  const res = await fetch('http://localhost:3000/api/hello');
  //const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}



export default function Page({ params }) {
	console.log(params);
	return <p className="text-3xl">Movie {params.id}</p>	
}