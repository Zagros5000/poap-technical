import { InnerWrapper, SearchPageWrapper } from "./SearchPage.style";

import { POAPList } from "./POAPList/POAPList";
import { SearchBar } from "./SearchBar/SearchBar";

export const SearchPage = () => {
	return (
		<SearchPageWrapper>
			<InnerWrapper>
				<SearchBar />
			</InnerWrapper>
			<POAPList />
		</SearchPageWrapper>
	);
};
export default SearchPage;
