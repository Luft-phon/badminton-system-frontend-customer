import * as React from "react";
import { Dialog } from "radix-ui";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../../css/Dialog.css";

function DialogFeature({ className, dob, email, firstName, lastName, userID, phone }) {
	const token = localStorage.getItem("accessToken");

	const [formData, setFormData] = React.useState(() => ({
	}));
	React.useEffect(() => {
		setFormData({
			userID: userID || "",
			dob: dob ? new Date(dob).toISOString().split("T")[0] : "",
			firstName: firstName || "",
			lastName: lastName || "",
			email: email || "",
			phone: phone || ""

		});
	}, [dob, firstName, lastName, email, phone]);
	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("https://localhost:7087/api/Customer/update-customer", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(formData),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Failed to send");
				return res.json();
			})
			.then((data) => {
				alert("Cập nhật thành công!");
			})
			.catch((err) => {
				console.log("data: ", formData);
				alert("Lỗi khi gửi dữ liệu.");
				console.error(err);
			});
	};

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<div className="edit-btn-wrapper">
					<button className={className}>Edit profile</button>
				</div>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="DialogOverlay" />
				<Dialog.Content className="DialogContent">
					<Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
					<Dialog.Description className="DialogDescription">
						Make changes to your profile here. Click save when you're done.
					</Dialog.Description>
					<form onSubmit={handleSubmit}>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="firstName">First name</label>
							<input type="text" className="Input" id="firstName" value={formData.firstName} onChange={handleChange} />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="lastName">Last name</label>
							<input type="text" className="Input" id="lastName" value={formData.lastName} onChange={handleChange} />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="email">Email</label>
							<input type="email" className="Input" id="email" value={formData.email} onChange={handleChange} />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="dob">Date of birth</label>
							<input type="date" className="Input" id="dob" value={formData.dob} onChange={handleChange} />
						</fieldset>
						<fieldset className="Fieldset">
							<label className="Label" htmlFor="phone">Phone</label>
							<input type="tel" className="Input" id="phone" value={formData.phone} onChange={handleChange} />
						</fieldset>
						<div style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}>
							{/* <Dialog.Close asChild> */}
							<button type="submit" className="Button green">Save changes</button>
							{/* </Dialog.Close> */}
						</div>
					</form>
					<Dialog.Close asChild>
						<button className="IconButtonPopUp" aria-label="Close">
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

export default DialogFeature;
