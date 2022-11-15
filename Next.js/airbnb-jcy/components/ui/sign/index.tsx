import { Dialog } from "@mui/material";
import { createContext, useState } from "react";
import SingInForm from "./sign-in";
import SingupForm from "./sign-up";
import SignAuthForm from "./sign-auth";
import { stringify } from "querystring";
import { off } from "process";

type Props = { open?: boolean; onClose: () => void };

type SignMode = "SIGNIN" | "SIGNUP" | "SIGNAUTH";

type SingContextType = {
  currentUser?: string;
  closeModal: (auto?: boolean) => void;
  setUserStatus: (obj: { mode?: SignMode; currentUser?: string }) => void;
};

export const SignCotext = createContext<SingContextType | null>(null);

export default function SignIndex({ open, onClose }: Props) {
  const [userMode, setUserMode] = useState<SignMode>("SIGNIN");
  const [userEmail, setUserEmail] = useState<string | undefined>();

  const changUserStatusHandle = (obj: {
    mode?: SignMode;
    currentUser?: string;
  }) => {
    console.log("changUserStatusHandle - currnetUser ", obj.currentUser);
    if (obj.currentUser) {
      setUserEmail(obj.currentUser);
    }
    if (obj.mode) {
      setUserMode(obj.mode);
    }
    if (!obj.mode) {
      if (obj.mode === "SIGNIN") {
        onClose();
      } else {
        setUserMode("SIGNIN");
      }
    }
  };

  const closeModalHandle = (force?: boolean) => {
    if (force) {
      onClose();
    } else {
      if (userMode === "SIGNIN") onClose();
      if (userMode === "SIGNAUTH") setUserMode("SIGNIN");
      if (userMode === "SIGNUP") setUserMode("SIGNIN");
    }
  };

  return (
    <Dialog open={true} onClose={() => closeModalHandle()} fullWidth={true}>
      <SignCotext.Provider
        value={{
          currentUser: userEmail,
          setUserStatus: changUserStatusHandle,
          closeModal: closeModalHandle,
        }}
      >
        {userMode === "SIGNIN" && <SingInForm />}
        {userMode === "SIGNAUTH" && <SignAuthForm />}
        {userMode === "SIGNUP" && <SingupForm />}
      </SignCotext.Provider>
    </Dialog>
  );
}
