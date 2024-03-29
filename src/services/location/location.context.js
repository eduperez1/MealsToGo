import React, { useState, useEffect, createContext } from 'react';
import { locationRequest, locationTransform } from './location.services';

export const LocationContext = createContext(); 

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState("San Francisco"); 
    const [location, setLocation] = useState(null); 
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(false); 

    const onSearch = (searchKeyword) => {
        setIsLoading(true); 
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        if(!keyword.length){
            return; 
        }
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result); 
            console.log(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
            console.log(err);
        });
    }, [keyword])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}