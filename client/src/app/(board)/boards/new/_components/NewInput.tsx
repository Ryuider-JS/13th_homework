/** @format */
// TODO 코드를 어떻게 하면 깔쌈하게 쌈뽕하게 짤 수 있을까? 생각하기
import { ETitle, ITitle, RNewInputPlaceHolder } from '@/models/board.type';
import { useParams, usePathname } from 'next/navigation';

import { useAddressStore } from '@/stores/useAddressStore';
import useSWR from 'swr';

export default function NewInput({ title, value }: ITitle) {
	const { address } = useAddressStore();
	const param = useParams();

	const { data } = useSWR(`/board/${param.boardId}`, null, {
		revalidateOnFocus: false,
	});

	const path: string = usePathname();

	return (
		<input
			id={title}
			disabled={
				(data && title === ETitle.Author) ||
				(path.includes('edit') && title === ETitle.Password) ||
				(address && title === ETitle.Address) ||
				value
			}
			name={title}
			type={title === ETitle.Password ? 'password' : 'text'}
			className="flex w-full rounded-lg border-[1px] border-gray-200 px-3 py-4 outline-none placeholder:prose-r_16_24 placeholder:text-gray-400"
			placeholder={RNewInputPlaceHolder[title]}
			defaultValue={
				data?.title ||
				(path.includes('edit') && title === ETitle.Password
					? '123'
					: address && title === ETitle.Address
						? address
						: undefined) ||
				value
			}
		/>
	);
}
