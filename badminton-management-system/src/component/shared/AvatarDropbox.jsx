import * as React from "react";
import { DropdownMenu } from "radix-ui";
import {
	HamburgerMenuIcon,
	DotFilledIcon,
	CheckIcon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";
import "../../css/AvatarDropbox.css";
import AvatarIcon from "../member/user/Avatar";
import { Link } from "react-router-dom";

const AvatarDropbox = () => {
	const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
	const [urlsChecked, setUrlsChecked] = React.useState(false);
	const [person, setPerson] = React.useState("pedro");
	const img = {}
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					<AvatarIcon img="https://i.pravatar.cc/150?u=phong"/>
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
					<Link to='/auth/user'>
					<DropdownMenu.Item className="DropdownMenuItem">
						User Profile <div className="RightSlot">⌘+T</div>
					</DropdownMenu.Item>
					</Link>				
					<Link to='/auth/schedule'>
					<DropdownMenu.Item className="DropdownMenuItem">
						View Booking Schedule <div className="RightSlot">⌘+N</div>
					</DropdownMenu.Item>
					</Link>
					<Link to='/auth/bookingConfirm'>
					<DropdownMenu.Item className="DropdownMenuItem">
						Booking History <div className="RightSlot">⌘+N</div>
					</DropdownMenu.Item>
					</Link>
					<DropdownMenu.Item className="DropdownMenuItem" disabled>
						New Private Window <div className="RightSlot">⇧+⌘+N</div>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
							More Tools
							<div className="RightSlot">
								<ChevronRightIcon />
							</div>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent
								className="DropdownMenuSubContent"
								sideOffset={2}
								alignOffset={-5}
							>
								<DropdownMenu.Item className="DropdownMenuItem">
									Save Page As… <div className="RightSlot">⌘+S</div>
								</DropdownMenu.Item>
								<DropdownMenu.Item className="DropdownMenuItem">
									Create Shortcut…
								</DropdownMenu.Item>
								<DropdownMenu.Item className="DropdownMenuItem">
									Name Window…
								</DropdownMenu.Item>
								<DropdownMenu.Separator className="DropdownMenu.Separator" />
								<DropdownMenu.Item className="DropdownMenuItem">
									Developer Tools
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>

					<DropdownMenu.Separator className="DropdownMenuSeparator" />

					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={bookmarksChecked}
						onCheckedChange={setBookmarksChecked}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Bookmarks <div className="RightSlot">⌘+B</div>
					</DropdownMenu.CheckboxItem>
					<DropdownMenu.CheckboxItem
						className="DropdownMenuCheckboxItem"
						checked={urlsChecked}
						onCheckedChange={setUrlsChecked}
					>
						<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
							<CheckIcon />
						</DropdownMenu.ItemIndicator>
						Show Full URLs
					</DropdownMenu.CheckboxItem>

					<DropdownMenu.Separator className="DropdownMenuSeparator" />

					<DropdownMenu.Label className="DropdownMenuLabel">
						People
					</DropdownMenu.Label>
					<DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="pedro"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Pedro Duarte
						</DropdownMenu.RadioItem>
						<DropdownMenu.RadioItem
							className="DropdownMenuRadioItem"
							value="colm"
						>
							<DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
								<DotFilledIcon />
							</DropdownMenu.ItemIndicator>
							Logout
						</DropdownMenu.RadioItem>
					</DropdownMenu.RadioGroup>

					<DropdownMenu.Arrow className="DropdownMenuArrow" />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default AvatarDropbox;
