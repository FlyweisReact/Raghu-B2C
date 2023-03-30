import { useNavigate } from "react-router";

const navigate = useNavigate()

function GoBack () {
    navigate(-1)
}

export function GoBack