import express from "express"
import path from "path"
import { sample1Controller } from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
