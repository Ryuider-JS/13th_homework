/** @format */

export interface ICommonAPIComment {
	author: string;
	content: string;
	rating: number;
}
export interface IRequestComment extends ICommonAPIComment {
	password: string;
}

export interface IResponseComment extends ICommonAPIComment {
	parentId: string | null;
	boardId: number;
	_id: string;
	createdAt: string;
	updatedAt: string;
}
