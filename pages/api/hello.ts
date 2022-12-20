// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	title: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
	

	let movies = [
		{ id: 1, title: 'ドラえもん'},
		{ id: 2, title: 'クレヨンしんちゃん'},
		{ id: 3, title: '名探偵コナン'},
		{ id: 4, title: 'ポケットモンスター'},
		{ id: 5, title: 'ドラゴンボール'},

	]

  res.status(200).json(movies)
}
