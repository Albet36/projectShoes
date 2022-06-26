const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const producerModels = new Schema (
{
    idProducer : {type: String},
    imagesProducer: {type : String},
    nameProducer : {type: String},
    ageProducer : {type: String},
    description : {type: String},
    Nation : {type: String}
},
{
    timestamps: true
}
)
module.exports = mongoose.model("producer",producerModels);