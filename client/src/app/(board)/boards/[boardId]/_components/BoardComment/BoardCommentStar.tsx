/** @format */

import { Fragment } from 'react';
import { IRatingProps } from '@/models/children.type';

export default function BoardCommentStar({ rating, setRating }: IRatingProps) {
	return (
		<div className="flex">
			{[...Array(5)].map((_, index) => {
				const currentRate = index + 1;
				return (
					<Fragment key={currentRate}>
						<label>
							<input
								name="Rating"
								type="radio"
								value={currentRate}
								onClick={setRating ? () => setRating(currentRate) : undefined}
								className="absolute size-6 cursor-pointer opacity-0"
							/>
						</label>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="cursor-pointer"
						>
							<path
								d="M12.0001 16.688L8.10988 19.034C7.96488 19.1187 7.81963 19.1543 7.67413 19.1407C7.52863 19.1273 7.39696 19.0782 7.27913 18.9938C7.16113 18.9091 7.07005 18.7985 7.00588 18.662C6.94188 18.5255 6.93163 18.3745 6.97513 18.209L8.00788 13.7917L4.57338 10.8187C4.44505 10.7073 4.3633 10.5781 4.32813 10.4313C4.2928 10.2844 4.30205 10.1418 4.35588 10.0033C4.40971 9.86492 4.4873 9.75183 4.58863 9.664C4.68996 9.57617 4.82846 9.51875 5.00413 9.49175L9.53663 9.09575L11.2964 4.9245C11.3604 4.76933 11.4575 4.65458 11.5876 4.58025C11.7178 4.50592 11.8553 4.46875 12.0001 4.46875C12.145 4.46875 12.2825 4.50592 12.4126 4.58025C12.5428 4.65458 12.6399 4.76933 12.7039 4.9245L14.4636 9.09575L18.9961 9.49175C19.1718 9.51875 19.3103 9.57617 19.4116 9.664C19.513 9.75183 19.5905 9.86492 19.6444 10.0033C19.6982 10.1418 19.7075 10.2844 19.6721 10.4313C19.637 10.5781 19.5552 10.7073 19.4269 10.8187L15.9924 13.7917L17.0251 18.209C17.0686 18.3745 17.0584 18.5255 16.9944 18.662C16.9302 18.7985 16.8391 18.9091 16.7211 18.9938C16.6033 19.0782 16.4716 19.1273 16.3261 19.1407C16.1806 19.1543 16.0354 19.1187 15.8904 19.034L12.0001 16.688Z"
								fill={rating >= currentRate ? '#FADA67' : '#c7c7c7'}
							/>
						</svg>
					</Fragment>
				);
			})}
		</div>
	);
}
