export type RegisterUserData = {
   username: string;
   email: string;
   password: string;
};

export type RegisterUserPayload = {
   data: RegisterUserData;
   callback: () => void;
};

export type ActivateUserData = {
   uid: string;
   token: string;
}

export type ActivateUserPayload = {
   data: ActivateUserData;
   callback: () => void;
};