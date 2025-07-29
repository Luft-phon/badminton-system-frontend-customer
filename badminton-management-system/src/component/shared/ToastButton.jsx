import * as React from "react";
import { Toast } from "radix-ui";
import "../css/ToastButton.css";
import { FaExclamation, FaQuora, FaUsers } from "react-icons/fa";

const ToastButton = ({ button, title }) => {
		const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);

	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<Toast.Provider>
			<button
			style={{ outline: "none" }}
				// className="Button large violet"
				onClick={() => {
					setOpen(false);
					window.clearTimeout(timerRef.current);
					timerRef.current = window.setTimeout(() => {
						eventDateRef.current = oneWeekAway();
						setOpen(true);
					}, 100);
				}}
			>
				{button}
			</button>

			<Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen} duration={3000}>
				<Toast.Title style={{display: "flex", justifyContent: "center", gap: "10px"}} className="ToastTitle">{title}</Toast.Title>
				{/* <Toast.Description asChild>
					<time
						className="ToastDescription"
						dateTime={eventDateRef.current.toISOString()}
					>
						{prettyDate(eventDateRef.current)}
					</time>
				</Toast.Description>
				<Toast.Action
					className="ToastAction"
					asChild
					altText="Goto schedule to undo"
				>
					<button className="Button small green">Undo</button>
				</Toast.Action> */}
			</Toast.Root>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>
	);
};

function oneWeekAway(date) {
	const now = new Date();
	const inOneWeek = now.setDate(now.getDate() + 7);
	return new Date(inOneWeek);
}

function prettyDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		dateStyle: "full",
		timeStyle: "short",
	}).format(date);
}

export default ToastButton;
