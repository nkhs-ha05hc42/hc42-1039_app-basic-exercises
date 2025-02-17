import { q9_7Model } from "./model.mjs"

const get971 = async (req, res) => {
    const result = await q9_7Model.selectAll()
    res.send(JSON.stringify({ status: "success", list: result }))
}

const get972 = async (req, res) => {
    const id = req.params.id
    if (!id) {
    return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await q9_7Model.selectOne(id)
    if (!result) {
    return res.send(JSON.stringify({ status: "not found" }))
    }
    res.send(JSON.stringify({ status: "success", data: result }))
}

const post973 = async (req, res) => {
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!user_id || !year || !month || !day || !name || !score) {
        return res.send(JSON.stringify({ status: "error" }))
    }
    const result = await (q9_7Model.insert97(user_id, year, month, day, name, score))
    res.send(JSON.stringify({ status: "success", data: result }))
}

export const q9_7Controller = {
    get971,
    get972,
    post973,
}