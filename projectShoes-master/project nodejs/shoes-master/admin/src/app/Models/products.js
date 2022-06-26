const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productsModels = new Schema(
{
    idProduct : {type: String},
    imagesProduct : {type: String},
    images1Product : {type: String},
    images2Product : {type: String},
    images3Product : {type: String},
    nameProduct : {type: String},
    priceProduct : {type: Number },
    priceSale : {type: Number},
    description : {type: String},
    status : {type: Boolean},
    yearOfManufacture : { type: String },
    producer : {type: String},
    category : {type: Schema.Types.ObjectId,
                 ref : 'category'
                }
},
{
    timestamps: true
}
)
module.exports = mongoose.model("products",productsModels);