import {
	FormWrapper,
	InputWrapper,
	SearchButton,
	SearchInput,
} from "./SearchBar.style";
import { useContext, useEffect, useState } from "react";

import { API_USER_SEARCH_URL } from "../../../constants/ApiConstants";
import { ErrorText } from "../../../components/Text/Text.style";
import { Label } from "../../../components/Text/Label.style";
import { SearchContext } from "../../../context/SearchProvider";
import { useAxios } from "../../../service/useAxios";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [address, setAddress] = useState("");
	const { response, error, setError, loading, makeRequest } = useAxios();
	const { setSearchResults, setLoading } = useContext(SearchContext);
	// decouple context loading from useAxios calls
	useEffect(() => {
		setLoading(loading);
	}, [setLoading, loading]);

	// update context with scan results
	useEffect(() => {
		makeRequest("get", `${API_USER_SEARCH_URL}/${address}`);
	}, [address, makeRequest]);
	// update context with scan results
	useEffect(() => {
		setSearchResults(response?.data);
	}, [response, setSearchResults]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchResults([]);
		setAddress(searchTerm);
	};
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
		setError("");
	};
	return (
		<>
			<FormWrapper onSubmit={handleSubmit}>
				<InputWrapper>
					<Label htmlFor="delivery-search">
						Input an address manually
					</Label>
					<SearchInput
						type="text"
						id="delivery-search"
						value={searchTerm}
						onChange={onInputChange}
						aria-label="Search Deliveries"
					></SearchInput>
					{error && <ErrorText>{error}</ErrorText>}
					<SearchButton type="submit">
						Search a Users Collection
					</SearchButton>
				</InputWrapper>
			</FormWrapper>
		</>
	);
};
