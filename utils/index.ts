import { Car, searchParams } from '@/types';
import axios from 'axios';

export async function fetchCars({ manufacturer, year, fuel, limit, model }: searchParams) {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: { model: model, manufacturer: manufacturer, year: year, fuel_type: fuel, limit: limit },
        headers: {
            'X-RapidAPI-Key': '04d00d2732msh8f3c3f212c6e255p188c7ejsn4898588f9f70',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const result = await response.data
        return result
    } catch (error) {
        console.error(error);
    }
}

export const generateCarImageUrl = (car: Car, angle?: string) => {

}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value)

    const newPathname = `${window.location.pathname
        }?${searchParams.toString()}`;

    return newPathname;
}