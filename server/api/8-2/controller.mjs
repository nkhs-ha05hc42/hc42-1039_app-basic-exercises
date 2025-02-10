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
const post822 = async (req, res) => {
    const code = req.body.code
    const postcode = req.body.postcode
    const address = req.body.address

    if ( code !== "HC42-9822") {
        res.send(
            JSON.stringify({
                status: "error",
                code: code,
                cause: "code already exists!",
            }),
        )
    }else{
        res.send(
            JSON.stringify({
                status: "OK",
                postcode: postcode,
                address: address,
            })
        )
    }
}
export const q8_2Controller = {
    get821,
    post822,
}