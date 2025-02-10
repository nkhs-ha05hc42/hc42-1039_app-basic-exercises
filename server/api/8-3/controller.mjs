const get831 = (res) => {
    const object831 = [
        {
            en: "apple",
            ja: "りんご",
        },
        {
            en: "lemon",
            ja: "レモン",
        },
        {
            en: "grape",
            ja: "ぶどう",
        },
    ]
    res.json(object831)
}

const get832 = (req, res) => {
    const id = req.params.en;

    const object832 = [
        { en: "apple", ja: "りんご" },
        { en: "lemon", ja: "レモン" },
        { en: "grape", ja: "ぶどう" }
    ];

    const result = object832.find(item => item.en === id);

    if (result) {
        res.json(result);
    } else {
        res.status(404).json({
            status : "error",
            en : id,
            error: "not found!",
        });
    }
};

export const q8_3Controller = {
    get831,
    get832,
}