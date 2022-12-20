type Props = { params: { id: string } };

const User = ({ params: { id } }: Props) => {
	console.log("id=", id)
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg">User詳細ページ {id}</h1>
    </div>
  );
};

export default User;



//import { useRouter, usePathname, useSearchParams } from 'next/navigation';
//export default function User({ params, searchParams }: {
//  searchParams?: { [key: string]: string | string[] | undefined };
//}) {
//  return (
//    <>
//      <p>Page: {searchParams.page}</p>
//      <p>Order: {searchParams.order}</p>
//    </>
//  );
//}