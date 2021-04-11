import React, { useState } from 'react';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(3);

    const mockData = [
        {
            name: 'Spot',
            breed: 'Dalmation',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Lucy',
            breed: 'Chihuahua',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Luna',
            breed: 'Husky',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Cooper',
            breed: 'Labrador',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Charlie',
            breed: 'Golden Retriever',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Daisy',
            breed: 'Pug',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Max',
            breed: 'German Shepherd',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Bailey',
            breed: 'Jack Russell Terrier',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Bella',
            breed: 'Doberman',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
        {
            name: 'Buddy',
            breed: 'Pit Bull',
            profilePic: 'https://static.thenounproject.com/png/128780-200.png' 
        },
    ]

    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;

    const dogsToDisplay = mockData.slice(indexOfFirstDog, indexOfLastDog)

    const handleClick = (value) => {
        setCurrentPage(currentPage + value)
    }

    return (
        <div>
            {dogsToDisplay.map(dog => {
                return (
                    <div style={{display: 'flex'}}>
                        <div>
                            <p>Name: {dog.name}</p>
                            <p>Breed: {dog.breed}</p>
                        </div>
                        <img src={dog.profilePic} alt="Dog Icon"/>
                    </div>
                )
            })}
            <button onClick={() => handleClick(-1)} disabled={currentPage === 1 && true} >Previous</button>
            <button onClick={() => handleClick(1)} disabled={currentPage === Math.ceil(mockData.length / dogsPerPage) && true}>Next</button>
            <p>Page {currentPage} of {Math.ceil(mockData.length / dogsPerPage)} results</p>
        </div>
    );
};

export default Pagination;