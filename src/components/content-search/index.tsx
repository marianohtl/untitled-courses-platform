import React, {  useState } from "react";
import style from "./content-search.module.scss";

interface IContentSearchProps{
    placeholder?: string,
    onSearch?: (search: string) => void,
    onChange?: (search: string) => void,
}

export default function ContentSearch(
    { placeholder, onSearch, onChange } : IContentSearchProps
)
{
    const [searchingOption, setSearchingOption] = useState<string>("");

    const _onChange = function(event: React.ChangeEvent<HTMLInputElement>){
        setSearchingOption(event.target.value); 
        onChange?.(event.target.value);
    };

    const _onSubmit = function(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        onSearch?.(searchingOption);
    };

    return (
        <form onSubmit={_onSubmit}>
            <input 
                className={style["field"]}
                type="search" 
                autoComplete='off'
                placeholder={placeholder}
                value={searchingOption}
                onChange={_onChange}
            />
            <button className={style["submit-button"]}>Search</button>
        </form>
    );
}