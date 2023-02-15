export type GeneralDataWithCallback<T> = {
   data: T;
   callback: () => void;
};


export type RegisterUserData = {
   username: string;
   email: string;
   password: string;
};

// export type RegisterUserPayload = {
//    data: RegisterUserData;
//    callback: () => void;
// };

export type RegisterUserPayload = GeneralDataWithCallback<RegisterUserData>;


export type ActivateUserData = {
   uid: string;
   token: string;
}

export type ActivateUserPayload = GeneralDataWithCallback<ActivateUserData>;

export type SignInUserData = {
   email: string;
   password: string;
};

export type SignInUserPayload = GeneralDataWithCallback<SignInUserData>;

export type SetUserDataPayload = {
   userName: string;
   id: number | null;
};

export type SendResetEmailPayload = {
   email: string;
   callback: () => void;
}

export type ResetPasswordConfirmData = {
   uid: string;
   token: string;
   new_password: string;
}

export type resetPasswordConfirmPayload = GeneralDataWithCallback<ResetPasswordConfirmData>;