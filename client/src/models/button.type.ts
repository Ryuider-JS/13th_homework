/** @format */

export enum EButtonTitle {
	Sumbit = 'sumbit',
	Update = 'update',
	Cancel = 'cancel',
	Delete = 'delete',
	Back = 'back',
	Comment = 'comment',
	Reply = 'reply',
}

export interface IButtonProps extends IButtonDisabled {
	title: EButtonTitle;
	boardId?: number;
	setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IButtonDisabled {
	isButtonDisabled?: boolean;
}

export enum EButtonKorea {
	sumbit = '작성하기',
	cancel = '취소',
	delete = '삭제 하기',
	back = '뒤로 가기',
	list = '목록으로',
	update = '수정하기',
	comment = '댓글 등록',
	reply = '대댓글 등록',
}

export enum EBoardButton {
	list = 'list',
	update = 'update',
}

export interface IBoardButton {
	content: EBoardButton;
}
