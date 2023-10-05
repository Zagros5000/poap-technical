import { Loading } from "../../../components/Loading/Loading";
import { POAPItem } from "./POAPItem/POAPItem";
import { POAPListWrapper } from "./POAPList.style";
import { PoapEventResponse } from "../../../interfaces/interfaces";
import { SearchContext } from "../../../context/SearchProvider";
import { useContext } from "react";

export const POAPList = () => {
	const { searchResults, loading } = useContext(SearchContext);
	return (
		<POAPListWrapper>
			{loading && <Loading />}
			{searchResults?.map((item: PoapEventResponse) => {
				return (
					<POAPItem
						key={`delivery-${item.event.id}`}
						data={item.event}
					/>
				);
			})}
		</POAPListWrapper>
	);
};
