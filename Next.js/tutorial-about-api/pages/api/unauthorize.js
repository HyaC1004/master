
export default function handle(req, res) {
    res.status(401).json({ "message": "not enough permission" })
}