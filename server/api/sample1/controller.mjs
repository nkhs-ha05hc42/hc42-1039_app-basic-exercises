const postSample1 = (req, res) => {
    console.log(req.body)
    res.send(JSON.stringify({ status: "success" }))
   }
   export const sample1Controller = {
    postSample1,
}