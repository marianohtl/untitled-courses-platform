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
        <form 
            className={style["root"]} 
            onSubmit={_onSubmit}
        >
            <div className={style["field"]} >
                <input 
                    className={style["input"]}
                    type="search" 
                    autoComplete='off'
                    placeholder={placeholder}
                    value={searchingOption}
                    onChange={_onChange}
                />
                <button 
                    className={style["submit-button"]} 
                    type="submit"
                >
                    <span className="material-symbols-outlined">search</span>
                </button>
            </div>
        </form>
    );
}