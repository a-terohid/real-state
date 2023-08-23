import { Schema } from "mongoose"
import { CATEGORY, ROLE } from "./enum"

export interface User  {
    name ?: string,
    lastName ?: string,
    email : string,
    password : string,
    number ?: string,
    dateAdded : Date,
    personalID ?: string,
    role : ROLE ,
    numberOfAds ?: number
}

export interface Profile {    
   UserId : Schema.Types.ObjectId,
   Title : string
   Description : string
   Cost : number
   Category : CATEGORY
   Address : string
   Phone : string
   RealState : string
   Amenities ?: string[]
   Rules ?: string[]
   Published : boolean
   publishedBY : string
   Rejected : boolean
   rejectNUM : number
}