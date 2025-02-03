const get821 = (req, res) => {
    const acode = "HC42-9821"
    const bcode = req.query.code;
    if(acode === bcode){
        res.send(
            JSON.stringify({
                code: req.query.code,
                name: "情報太郎",
            }),
        )
    } else{
        res.send(
            JSON.stringify({
                status: "error",
                code: req.query.code,
                cause: "not found code!",
            }),
        )
    }
}

export const q8_2Controller = {
    get821,
}