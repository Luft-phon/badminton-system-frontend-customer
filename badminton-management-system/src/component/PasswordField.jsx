import * as React from "react";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import "../css/PasswordField.css";

function PasswordToggleFieldInput({value, onChange}){
    return(
	<PasswordToggleField.Root>
      <div className="form-group password-toggle-wrapper">
        <PasswordToggleField.Input
          className="password-input"
          value={value}                // ✅ phải có dòng này
          onChange={onChange}  
          placeholder="Enter your password"
          required
        />
        <PasswordToggleField.Toggle className="password-toggle-icon">
          {/* <PasswordToggleField.Icon
            visible={<EyeOpenIcon />}
            hidden={<EyeClosedIcon />}
          /> */}
          <PasswordToggleField.Slot visible="🙊" hidden="🙈" />
        </PasswordToggleField.Toggle>
      </div>
    </PasswordToggleField.Root>
  );
}

export default PasswordToggleFieldInput;
