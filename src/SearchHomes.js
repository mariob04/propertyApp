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
        
                <h1>Entire Homes</h1>

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
                img="https://cdn.decoist.com/wp-content/uploads/2019/12/Relaxing-modern-weekend-house-in-Jones-Michigan-with-a-dark-exterior.jpg"
                location="Cabin house in Michigan"
                title="Relaxing modern weekend house in Jones, Michigan"
                description="6 guests ~ 2 bedroom ~ 3 bed ~ 1 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$300 / night"
                total="$900 total"
            />
             <SearchResult 
                img="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/120279241_2370873959734512_7456574397936848835_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=ctpEhbO3UYsAX_L7V-i&_nc_ht=scontent.fzag4-1.fna&oh=bba9dd565175b1c6b57f7daf81284397&oe=5F9A5038"
                location="Villa in Florida"
                title="Mediterranean style villa with private beach in Florida"
                description="10 guests ~ 5 bedroom ~ 5 bed ~ 3 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$300 / night"
                total="$900 total"
            />
             <SearchResult 
                img="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/120195775_2367852143370027_5572525281154790281_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=gB9FHpzTwe0AX92AOQx&_nc_ht=scontent.fzag4-1.fna&oh=9683960f7c894e913fe1815c488020b2&oe=5F942AC1"
                location="Private house in Malaga"
                title="Perfect for family retreats with abundance of space"
                description="10 guests ~ 5 bedroom ~ 5 bed ~ 3 bathrooms ~ Wifi ~ Kitchen"
                star={4.73}
                price="$300 / night"
                total="$900 total"
            />
            
        </div>
    )
}

export default SearchPage
