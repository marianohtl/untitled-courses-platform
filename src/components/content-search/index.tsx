import React, { useState } from "react";

interface IContentSearchProps{
    list?: SearchOption[],
    pageSize?: 10,
    placeholder?: string,
    onSearch?: (search: string) => void,
    onSubmitSearch?: (search: string) => void,
    onSelectOption?: (searchItem: SearchOption) => void
}

type SearchOption = {
    label: string,
    value: string
}

const list = [
    {
        label: "abc",
        value: "abc"
    },
    {
        label: "aaa",
        value: "aaa"
    },
    {
        label: "bbb",
        value: "bbb"
    },
    {
        label: "cccc",
        value: "cccc"
    }
];

export default function ContentSearch({placeholder,pageSize}: IContentSearchProps)
{
    const [searchingOption, setSearchingOption] = useState<string>("");
    const [dataList, setDataList] = useState<SearchOption[]>(
        [
            {
                label: "abc",
                value: "abc"
            }
        ]
    );

    const filterList = function(text: string){
        return list
            .filter(x => x.value.includes(text))
            .slice(0, pageSize)
            .sort((a,b) => a.label.localeCompare(b.label));
    };

    const onChange = function(event: React.ChangeEvent<HTMLInputElement>){
        setDataList(filterList(event.target.value));
        setSearchingOption(event.target.value); 
    };

    return (
        <div>
            <input 
                list="search"
                type="search" 
                placeholder={placeholder}
                value={searchingOption}
                onChange={onChange}
            />
            <datalist id="search">
                {
                    dataList.map(option =>
                        (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )
                    )
                }
            </datalist>
            <button>Search</button>
        </div>
    );
}