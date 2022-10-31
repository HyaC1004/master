import { User } from "../interfaces"

type Props = {target: User};

const Profile = ({target}: Props) => {
    return <h2>{target.email}</h2>
}