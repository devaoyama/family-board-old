import {TUser} from "./User";

export type TFamily = {
    ID: number
    Name: string
    InvitationCode: string
    Users: TUser[]
}
