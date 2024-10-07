/** @format */
'use server';

import postComment from '@/apis/comments/postComment';

export default async function createBoardCommentAction(
	prevState: { boardId: number },
	formData: { get: (arg0: string) => string | null },
) {
	const boardId: number = prevState.boardId;
	const author: string | null = formData.get('Author');
	const password: string | null = formData.get('Password');
	const content: string | null = formData.get('Comment');
	const stringRating: string | null = formData.get('Rating');

	const rating: number | null = Number(stringRating);

	if (!author || !password || !content || !rating)
		return {
			message: 'fail',
			boardId: boardId,
			error: '댓글을 정확히 입력해주세요',
		};

	const result = await postComment({ author, password, content, rating }, boardId);
	// 업데이트 client cache & 재 생성할 때 comment가 정상적으로 생성되지 않앗음
	if (typeof result === 'string') {
		return {
			message: 'fail',
			boardId: boardId,
			error: result,
		};
	} else if (typeof result === 'object') {
		return {
			message: 'success',
			boardId: boardId,
			error: undefined,
		};
	}
}
