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
                
                <h1>Places nearby</h1>

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
                img="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/120084511_2365817490240159_7548499104806439301_o.jpg?_nc_cat=1&_nc_sid=730e14&_nc_ohc=BpcCmqlzn1UAX_xnScN&_nc_ht=scontent.fzag4-1.fna&oh=579a82731ec5744c9b4faea98d60f0d2&oe=5F909389"
                location="Private room in center of London"
                title="Stay at this spaciuos Edwardian House"
                description="1 guest ~ 1 bedroom ~ 1 bed ~ 1.5 shared bathrooms ~ Wifi ~ Kitchen ~ Free parking"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult 
                img="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/91/0b/ee.jpg"
                location="Luxury flat in center of London"
                title="Luxury 2 bedroom Apartment Overlooking The Tower of London and the River Thames"
                description="4 guest ~ 2 bedroom ~ 2 bed ~ 1.5 shared bathrooms ~ Wifi ~ Kitchen ~ Free parking"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult 
                img="https://cf.bstatic.com/images/hotel/max1024x768/221/221343627.jpg"
                location="Penthose in Chicago"
                title="Penthouse at Grand Plaza, Chicago"
                description="6 guest ~ 3 bedroom ~ 3 bed ~ 2.5 shared bathrooms ~ Wifi ~ Kitchen ~ Free parking"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
            <SearchResult 
                img="https://www.maykenbel.com/wp-content/uploads/2018/09/501-Ashburn-Suite-living-room-Kitchen-1-cropped.jpg"
                location="Private room in center of London"
                title="Stay at this spaceiuos modern apartment"
                description="4 guest ~ 2 bedroom ~ 2 bed ~ 1.5 shared bathrooms ~ Wifi ~ Kitchen ~ Free parking"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />
        </div>
    )
}

export default SearchPage
