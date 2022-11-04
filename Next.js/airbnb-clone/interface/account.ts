export interface AccountData {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birth: string;
    auth?: boolean;
    marketing?: boolean;
    marketingDate?: Date | null;
    accountStatus?: boolean
}