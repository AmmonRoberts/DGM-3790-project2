import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FancySearch from './FancySearch';

const SearchForm = (props) => {
    const regionFilterOptions = [...new Set(props.CountriesJson.map(item => item.region))];

    return (

        <FormControl variant="filled" >
            <InputLabel id="simple-select-outlined-label">Region</InputLabel>
            <Select
                labelId="simple-select-outlined-label"
                id="simple-select-outlined"
                value={props.filteredRegion}
                onChange={props.filterRegionChangeHandler}
                label="Region">
                <MenuItem value="None">
                    <em>None</em>
                </MenuItem>
                {regionFilterOptions.sort().map((region, index) =>
                    <MenuItem
                        key={index}
                        value={region === "" ? "N/A" : region}
                        primaryText={region === "" ? "N/A" : region}>
                        <em>{
                            region === "" ? "N/A" : region}
                        </em>
                    </MenuItem>
                )}
            </Select>
            <FancySearch countries={props.filteredCountries}
            // searchString={searchString} 
            />
        </FormControl>
    );
}


export default SearchForm;