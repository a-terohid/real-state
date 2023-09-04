
export enum ROLE  {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum CATEGORY {
    VILLA = "villa",
    APARTMENT = "apartment",
    STORE = "store",
    OFFICE = "office"
}


export enum ERROR {
    SERVER_ERROR = "There is error in server!",
    USER_EXIST = "This user already exists!",
    CANT_FIND_USER = "This user cannot be found!",
    CANT_FIND_ADVERTISMEnT = "This advertisement cannot be found!",
    INVALID_DATA = "please enter a valid data!",
    REPEAT_PASSWORD = "The password and its repetition are not equal!",
    CREATE_ACCOUNT = "Please create an account first!",
    WRONG_PASSWORD = "Email or password is incorrect!",
    PROBLEM = "There is a Problem!",
    LOGIN = "Please login to your account!",
    NO_ADS = "No advertisement have been registered!",
    AD_ACCESS = "Your access is limited to this ad!",
    ACCESS_DENIED = "access denied!",
}

export enum MESSAGE {
    NEW_USER = "user cteated successfully!",
    NEW_ADVERTISEMENT = "Advertisement cteated successfully!",
    USER_EDITE = "user edited successfully!",
    AD_EDITE = "Advertisement edited successfully!",
    AD_DELETE = "Advertisement deleted successfully!",
    CHECK = "Recheck request successfully sent",
    AD_PUBLISHED = "Advertisement published successfully!",
    AD_REJECT = "Advertisement rejected!",
}

export enum ADS_STATUS  {
    PUBLISHED = "Published",
    WAITING = "Waiting",
    REJECTED = "Rejected",
}