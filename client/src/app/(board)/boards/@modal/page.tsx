/** @format */
'use client';

import { IModalProps } from '@/models/children.type';
import ModalContainer from '../_components/ModalContainer';
import useIsScrollLock from '@/hooks/useIsScrollLock';

export default function ModalPage({ searchParams }: IModalProps) {
	{
		('boardID = ');
	}
	const boardId = searchParams.boardId;
	useIsScrollLock(!!boardId);

	return searchParams.boardId && <ModalContainer boardId={boardId} />;
}
