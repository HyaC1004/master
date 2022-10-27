import nextAuth from "next-auth";

export default function (req, res) {
    console.log(nextAuth());

    return res.json({});
}