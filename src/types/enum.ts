
export enum ROLE  {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum CATEGORY {
    VILLA = "villa",
    APARYMENT = "apartment",
    STORE = "store",
    OFFICE = "office"
}


export enum ERROR {
    SERVER_ERROR = "there is error in server!",
    USER_EXIST = "this user already exists!",
    CANT_FIND_USER = "this user cannot be found!",
    INVALID_DATA = "please enter a valid data",
    REPEAT_PASSWORD = "The password and its repetition are not equal"
}

export enum MESSAGE {
    NEW_USER = "user cteated successfully!",
}
