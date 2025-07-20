import * as React from "react";
import { Avatar } from "radix-ui";
import "../css/Avatar.css";

const AvatarIcon = ({img}) => (
	<div style={{ display: "flex", gap: 20 }}>
		<Avatar.Root className="AvatarRoot">
			<Avatar.Image
				className="AvatarImage"
				src={img}
				alt="Colm Tuite"
			/>
			<Avatar.Fallback className="AvatarFallback" delayMs={600}>
				CT
			</Avatar.Fallback>
		</Avatar.Root>
	</div>
);

export default AvatarIcon;
