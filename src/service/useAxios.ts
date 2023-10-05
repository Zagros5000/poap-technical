import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback, useState } from "react";

import { API_KEY } from "../constants/ApiConstants";

interface MakeRequest {
	(
		method: "get" | "post" | "put" | "delete",
		url: string,
		headers?: AxiosRequestConfig["headers"],
		body?: AxiosRequestConfig["data"]
	): Promise<void>;
}
interface useAxiosResponse {
	response: AxiosResponse | null;
	error?: string;
	setError: React.Dispatch<React.SetStateAction<string | null>>;
	loading: boolean;
	makeRequest: MakeRequest;
}
export const useAxios = (): useAxiosResponse => {
	const [response, setResponse] = useState<AxiosResponse | null>(null);
	const [error, setError] = useState<AxiosError | null>(null);
	const [loading, setLoading] = useState(false);

	const makeRequest: MakeRequest = useCallback(
		async (method, url, headers, body) => {
			headers = { ...headers, "X-Api-Key": API_KEY };
			setLoading(true);
			try {
				let res: AxiosResponse;
				switch (method) {
					case "get":
						res = await axios.get(url, { headers });
						break;
					case "post":
						res = await axios.post(url, body, { headers });
						break;
					case "put":
						res = await axios.put(url, body, { headers });
						break;
					case "delete":
						res = await axios.delete(url, { headers });
						break;
					default:
						throw new Error(`Unsupported method: ${method}`);
				}
				setResponse(res);
			} catch (err) {
				setError(err?.response?.data?.message);
			} finally {
				setLoading(false);
			}
		},
		[]
	);
	return { response, error, setError, loading, makeRequest };
};
