import {COUNTRY_CODES} from "../constants/CountryCodes.js";

export default function getCountryNameByCode(countryCode) {
    const country = COUNTRY_CODES.find(country => country.code === countryCode.toUpperCase());
    return country.name;
}