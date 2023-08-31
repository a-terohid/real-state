import DatePicker from "react-multi-date-picker";

const DatePeaker = ({AddAdvertisementData, setAddAdvertisementData}) => {

    const changeHandler = (e : any) => {
        const date = new Date(e);
        setAddAdvertisementData({ ...AddAdvertisementData, constructionDate: date });
    };

    return (
        <div>
            <p>Construction Date:</p>
            <div className="ml-4 mt-2" >
                <DatePicker
                    value={AddAdvertisementData.constructionDate}
                    onChange={changeHandler}
                />
            </div>
        </div>
    );
};

export default DatePeaker;