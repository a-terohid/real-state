import { ADS_STATUS } from "@/types/enum"

export const adsStatus = ( Published : boolean , Rejected : boolean ,RejectNUM : number ) : ADS_STATUS => {

    if( Published ) return ADS_STATUS.PUBLISHED
    if( Rejected && RejectNUM == 0 ) return ADS_STATUS.WAITING
    if( Rejected && RejectNUM > 0 ) return ADS_STATUS.REJECTED

}