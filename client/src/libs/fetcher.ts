/** @format */
'use server';

import { api } from '../../config/axiosConfig';

const fetcher = async (url: string) => {
	return await api.get(url).then((res) => res.data.data);
};

export default fetcher;
