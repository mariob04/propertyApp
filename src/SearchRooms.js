import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./SearchResult"
import { useHistory } from "react-router-dom";

function SearchPage() {
    const history = useHistory();

    return (
        <div className="searchPage">
            <div className="searchPage__info">
        
                <h1>Apartments and rooms</h1>

                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More Filters
                </Button>
            </div>

            <Button onClick={() => history.push('/')}
                    variant="outlined">Back
            </Button>

            <SearchResult 
                img="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/120535688_2374251569396751_1757051697147237767_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=5FeRjSXZp-MAX8gKuAo&_nc_ht=scontent.fzag4-1.fna&oh=5b9872bab1791c14b3acf81dd9d8e7d0&oe=5F9AFFD3"
                location="Loft in San Francisco"
                title="Modern and stylish loft in centre of San Francicso with fantastic views"
                description="4 guests ~ 1 bedroom ~ 1 bed ~ 1 bathroom ~ Wifi ~ Kitchen"
                star={4.73}
                price="$300 / night"
                total="$900 total"
            />
            <SearchResult 
                img="https://www.essentialhome.eu/inspirations/wp-content/uploads/2019/01/capa-740x560.png"
                location="Apartment in Dublin"
                title="Spaceious 1 bedroom apartment in Dublin's most wanted neighbourhood"
                description="2 guests ~ 1 bedroom ~ 1 bed ~ 1 bathroom ~ Wifi ~ Kitchen"
                star={4.73}
                price="$230 / night"
                total="$690 total"
            />
            <SearchResult 
                img="https://cf.bstatic.com/images/hotel/max1024x768/156/156098761.jpg"
                location="Private room in Lisabon"
                title="Cozy private room in heart of Lisabon"
                description="2 guests ~ 1 bedroom ~ 1 bed ~ 1 bathroom ~ Wifi "
                star={4.73}
                price="$230 / night"
                total="$690 total"
            />
           
        </div>
    )
}

export default SearchPage
