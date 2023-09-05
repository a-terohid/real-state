import { Schema } from "mongoose"
import { CATEGORY, ROLE } from "./enum"

export interface User  {
    name ?: string,
    lastName ?: string,
    email : string,
    password : string,
    number ?: string,
    createdAt : Date,
    personalID ?: string,
    role : ROLE ,
    numberOfAds ?: number
}

export interface Advertisement {    
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
   PublishedBY : string
   Rejected : boolean
   RejectNUM : number
   ConstructionDate : Date
}

export type InputType = {
    value : string,
    label : string,
    changeHandler : Function,
    type : string,
    name : string,
    textarea: boolean;
}


export type AuthType = {
    email : string,
    password : string,
}


export type dashboardLayoutProps ={
    children: React.ReactNode
    role: ROLE,
    email: string,
}

export type ProfilePageProps = {
    user : User
}

type AdvertisementMOGO = Advertisement & {
    _id:  Schema.Types.ObjectId
}

export type cardProps = {
    data : AdvertisementMOGO ,
    dashboard ?: boolean , 
    waiting ?: boolean ,
    admin ?: boolean,
    userID ?: string
}


export type DetailsPageProps = {
    advertisments : AdvertisementMOGO
    dashboard ?: boolean , 
    waiting ?: boolean ,
    admin ?: boolean,
}