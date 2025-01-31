const get811 = (req, res) => {
    res.send(
        JSON.stringify({
        code: req.query.code,
        name: "情報太郎",
        }),
    )
}

const post812 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "OK" }))
}

const put813 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "OK" }))
}

const delete814 = (req, res) => {
    res.send(JSON.stringify({ status: "OK", code: req.query.code }))
}

export const q8_1Controller = {
    get811,
    post812,
    put813,
    delete814,
}