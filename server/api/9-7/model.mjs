import { query } from "../../db/manager.mjs"
const insert97 = async (user_id, year, month, day, name, score) => {
    const insertQuery = `
    INSERT INTO exams(
    user_id,
    year,
    month,
    day,
    name,
    score
    )
    VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
    )
    RETURNING *;
    `
    const result = await query(insertQuery, [ user_id, year, month, day, name, score])
    return result.rows.at(0)
}

const selectAll = async () => {
    const results = await query(`
    SELECT
    *
    FROM
    exams;
    `)
    return results.rows
}

const selectOne = async (id) => {
    const selectQuery = `
    SELECT
    *
    FROM
    exams
    WHERE
    id = $1;
    `
    const results = await query(selectQuery, [id])
    return results.rows.at(0)
}

const updateOne = async (id, user_id, year, month, day, name, score) => {
    const updateQuery = `
    UPDATE
    exams
    SET
    user_id = $2,
    year = $3,
    month = $4,
    day = $5,
    name = $6,
    score = $7
    WHERE
    id = $1
    RETURNING *;
    `
    const result = await query(updateQuery, [id, user_id, year, month, day, name, score])
    return result.rows.at(0)
}

export const q9_7Model = {
    insert97,
    selectAll,
    selectOne,
    updateOne,
}