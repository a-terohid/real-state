
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
    SERVER_ERROR = "There is error in server!",
    USER_EXIST = "This user already exists!",
    CANT_FIND_USER = "This user cannot be found!",
    INVALID_DATA = "please enter a valid data!",
    REPEAT_PASSWORD = "The password and its repetition are not equal!",
    CREATE_ACCOUNT = "Please create an account first!",
    WRONG_PASSWORD = "Email or password is incorrect!",
    PROBLEM = "There is a Problem!"
}

export enum MESSAGE {
    NEW_USER = "user cteated successfully!",
}
