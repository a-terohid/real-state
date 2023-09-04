export const mask = ( value : string , pattern : string ) : string => {
    let count = 0;
    return pattern.replace( /\*/g , () => value[ count++ ] || '' )
}


export const sp = ( number :number ) => {
    const seperatedNumber = number
      .toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = seperatedNumber.join(",");
    return joinedNumber;
  };