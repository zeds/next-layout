import Link from 'next/link';



async function getData() {
  const res = await fetch('http://localhost:3000/api/hello');
  //const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Layout({ children }:{children:any}) {
  const movies = await getData();
	console.log("movies=", movies);
  return (
		<div className="flex">
			<ul className="pr-10 text-sm">
				{movies.map((movie) => {
					console.log("movie=", movie);
					return (
						<li key={movie.id}>
							<Link href={`/movies/${movie.id}`}>{movie.title}</Link>
						</li>
					)
				})}
			</ul>
			<div>{children}</div>
		</div>
	)
}