import { q9_7Model } from "./model.mjs"
const get971 = async (req, res) => {
    const result = await q9_7Model.selectAll()
    res.send(JSON.stringify({ status: "success", list: result }))
}

export const q9_7Controller = {
    get971,
}