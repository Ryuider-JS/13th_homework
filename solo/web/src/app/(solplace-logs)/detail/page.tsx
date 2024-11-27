/** @format */

import DetailAddress from './_components/DetailAddress';
import DetailHeader from './_components/DetailHeader';
import Image from 'next/image';

const data = {
	name: 'Bramble & Brioche 한남점',
	address: '서울특별시 용산구 이태원로49길',
	lat: 37.53740854242604,
	lng: 126.99963793250834,
	content:
		'Bramble & Brioche는 하루를 천천히 시작하고 싶은 사람들을 위한 아늑한 브런치 카페예요. 바쁜 일상에서 잠깐 벗어나, 따뜻한 공간에서 여유를 느끼고 싶다면 이곳이 제격이에요. 이곳에서는 누구든 부담 없이 와서 편하게 시간을 보낼 수 있어요. 혼자 책을 읽거나 친구와 담소를 나누기에도 딱 좋죠. 브리오쉬는 매일 신선하게 구워지고, 상큼한 브램블 베리 잼과 함께라면 기분까지 상쾌해질 거예요.특별할 것 없는 평범한 하루를 조금 더 특별하게 만들고 싶을 때, Bramble & Brioche가 그 순간을 채워줄 거예요. 인테리어도 감성적이고 따뜻해서, 그냥 앉아 있기만 해도 힐링되는 공간이에요.언제든지 오세요. 이곳에서 당신만의 시간을 편안하게 즐길 수 있어요. 따뜻한 브런치 한 접시가 기다리고 있어요.',
};

export default function DetailPage() {
	return (
		<div className="w-full flex flex-col">
			<Image
				src={'/Images/detail.png'}
				alt="detail"
				width={360}
				height={480}
				className="w-full h-[30rem]"
			/>
			<div className="flex flex-col px-5 pt-6 pb-10">
				<div className="flex flex-col gap-3 border-b-[1px] border-b-[#e4e4e4] pb-3">
					<DetailHeader name={data.name} />
					<DetailAddress address={data.address} lat={data.lat} lng={data.lng} />
				</div>
				<div className="prose-r_14_20 mt-3">{data.content}</div>
			</div>
		</div>
	);
}
