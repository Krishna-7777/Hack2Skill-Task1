const express = require("express")
const mongoose = require("mongoose")
const { UserModel } = require("../models/user.model")

const api = express.Router()

api.get('/', async (ask, give) => {
    let data = await UserModel.aggregate([
        {
            $lookup: {
                from: "team",
                localField: "full_name",
                foreignField: "full_name",
                as: "team_data"
            }
        },
        {
            $project: {
                _id: 0,
                "Team Name": { $arrayElemAt: ["$team_data.team_name", 0] },
                "Full Name": "$full_name",
                Email: "$email",
                Number: "$number",
                City: "$city",
                URL: "$url"
            }
        }
    ])
    give.send(data)
})

module.exports = {
    api
}