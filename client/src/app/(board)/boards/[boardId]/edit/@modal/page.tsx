/** @format */
'use client';

import { IDeatilPageProps } from '@/models/children.type';
import ModalContainer from '../../../_components/ModalContainer';
import useIsScrollLock from '@/hooks/useIsScrollLock';

export default function ModalEditPage({ searchParams, params }: IDeatilPageProps) {
	const isModal = searchParams.modal as boolean;
	useIsScrollLock(!!isModal);

	/*
		https://localhost:3000/boards/1/edit?modal=true
	*/

	return searchParams.modal && <ModalContainer modal={isModal} boardId={+params.boardId} />;
}
