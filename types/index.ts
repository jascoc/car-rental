import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    textStyle?: string;
    rightIcon?: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}

export interface Car {
    city_mpg:        number
    class:           string
    combination_mpg: number
    cylinders:       number
    displacement:    number
    drive:           string
    fuel_type:       string
    highway_mpg:     number
    make:            string
    model:           string
    transmission:    string
    year:            number
}

export interface CarCardPros {
    car: Car;
}
  
export interface CarDetailProps {
    isOpen: boolean;
    setIsOpen: () => void;
    car: Car;
}

export interface SearchBarProps {
    otherClasses: string
}

export interface searchParams {
    manufacturer: string
    year: string
    fuel: string
    limit: string
    model: string
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface customFilterProps {
    title: string
    options: OptionProps[]
}

export interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
}