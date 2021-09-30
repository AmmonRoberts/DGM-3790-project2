import { Card } from "@material-ui/core";
import "../Styles/CountryData.css";
import PublicIcon from '@mui/icons-material/Public';
import MoneyIcon from '@mui/icons-material/Money';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MyModal from "./MyModal";
import { useState } from 'react';

const CountryData = (props) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="country-card">
            <Card
                className="country-data"
                onClick={handleOpen}
            >
                <h4>{props.country.name}</h4>
                <p>{props.country.subregion === "" ? "N/A" : props.country.subregion}, {props.country.region === "" ? "N/A" : props.country.region}</p>
                <p><LocationCityIcon />{props.country.capital}</p>
                <p><MoneyIcon />{props.country.currency_symbol} ({props.country.currency})</p>
            </Card>
            <MyModal openState={open} handleClose={handleClose} country={props.country} />
        </div>
    );

};

export default CountryData;