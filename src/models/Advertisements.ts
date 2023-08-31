import { CATEGORY } from "@/types/enum";
import { Advertisement } from "@/types/types";
import { Schema, model, models } from "mongoose";

const AdvertisementSchema = new Schema< Advertisement , Schema.Types.ObjectId >({
    UserId:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    Title:{
        type: String,
        required: true,
    },
    Description : {
        type: String,
        required: true,
    },
    Cost: {
        type: Number,
        required: true,
    },
    Category: {
        type : String,
        required : true,
        default: CATEGORY.APARTMENT
    },
    Address: {
        type: String,
        required: true,
    },
    Phone: {
        type: String,
        required: true,
    },
    RealState: {
        type: String,
        required: true,
    },
    Amenities :{
        type: [String],
        default: [],
    },
    Rules : {
        type: [String],
        default : [],
    },
    Published:{
        type: Boolean,
        required: true,
        default: false
    },
    PublishedBY : {
        type: String,
        required: true,
        default : ""
    },
    Rejected : {
        type: Boolean,
        required: true,
        default : true
    },
    RejectNUM : {
        type: Number,
        required: true,
        default : 0
    },

} , { collection : "real-state-user" } )

const Advertisement = models.Advertisement || model("Advertisement", AdvertisementSchema);

export default Advertisement;