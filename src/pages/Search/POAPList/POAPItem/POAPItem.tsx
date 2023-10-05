import { Img, POAPItemWrapper } from "./POAPItem.style";

import { DropDetailText } from "../../../../components/Text/Text.style";
import { PoapEventInterface } from "../../../../interfaces/interfaces";

interface POAPItemProps {
	data: PoapEventInterface;
}
export const POAPItem = ({ data }: POAPItemProps) => {
	return (
		<POAPItemWrapper>
			<a
				rel="noopener noreferrer"
				target="_blank"
				href={`https://poap.gallery/r/event/${data.id}`}
			>
				<Img src={`${data.image_url}?size=small`} />
			</a>
			<DropDetailText>
				<span>Name:</span> {data.name}
			</DropDetailText>
			<DropDetailText>
				<span>ID:</span> {data.fancy_id}
			</DropDetailText>
		</POAPItemWrapper>
	);
};
