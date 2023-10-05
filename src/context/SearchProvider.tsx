import { ReactNode, createContext, useState } from "react";

import { PoapEventResponse } from "../interfaces/interfaces";

interface SearchContextType {
	searchResults: PoapEventResponse[];
	setSearchResults: (results: PoapEventResponse[]) => void;
	loading: boolean;
	setLoading: (results: boolean) => void;
}

const SearchContext = createContext<SearchContextType>({
	searchResults: [],
	loading: false,
	setLoading: () => {},
	setSearchResults: () => {},
});

interface SearchProviderProps {
	children: ReactNode;
}

const SearchProvider = ({ children }: SearchProviderProps) => {
	const [searchResults, setSearchResults] = useState<PoapEventResponse[]>([]);
	const [loading, setLoading] = useState(false);

	return (
		<SearchContext.Provider
			value={{
				searchResults,
				setSearchResults,
				loading,
				setLoading,
			}}
		>
			{children}
		</SearchContext.Provider>
	);
};

export { SearchProvider, SearchContext };
