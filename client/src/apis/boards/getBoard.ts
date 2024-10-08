/** @format */

import { api, boardUrlEndPoint } from '../config';

import { IApiResponseData } from '@/models/apiResponse';
import { IBoardReader } from '@/models/boardReaderResponse';

export default function getBoard(boardId: number): IBoardReader {
	let status = 'pending';

	let board: IApiResponseData | Promise<IApiResponseData>;
	const response = api
		.get(`${boardUrlEndPoint}/${boardId}`)
		.then((response) => {
			board = response.data.data;
			status = 'fulfilled';
		})
		.catch((e) => {
			status = 'reject';
			board = e;
		});

	return {
		read() {
			if (status === 'pending') {
				throw response;
			} else if (status === 'reject') throw board;
			else if (status === 'fulfilled') return board;
		},
	};
}
