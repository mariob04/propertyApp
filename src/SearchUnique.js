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
        
                <h1>Unique Places</h1>

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
                img="https://afar-production.imgix.net/uploads/images/afar_post_headers/images/5G3pcphMFg/original_Winter-2019_Glass_igloo_interior_during_daytime_07.jpg?auto=compress,format&fit=crop&crop=top&lossless=true&w=1080&dpr=1"
                location="Winter Glamping in Finland"
                title="This winter, snuggle up in one of these insanely cozy bubbles"
                description="2 guests ~ 1 bedroom ~ 1 bed ~ 1 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$300 / night"
                total="$900 total"
            />
            <SearchResult 
                img="https://media.timeout.com/images/105304522/image.jpg"
                location="Treehouse Glamping in Plitvice Lakes"
                title="Lay your head high above the world"
                description="4 guests ~ 2 bedroom ~ 2 bed ~ 1 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$230 / night"
                total="$690 total"
            />
            <SearchResult 
                img="https://www.travelplusstyle.com/wp-content/uploads/2015/11/Laamu_Water_Villa_with_Pool_5962-ORIGINAL.jpg"
                location="Private floating home in Maldives"
                title="Stay at this luxury paradise home"
                description="4 guests ~ 2 bedroom ~ 2 bed ~ 1 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
        </div>
    )
}

export default SearchPage
