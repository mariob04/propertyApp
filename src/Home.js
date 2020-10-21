import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import { useHistory } from "react-router-dom";


function Home() {
    const history = useHistory();

    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <div onClick={() => history.push('/searchUnique')} >
                    <Card
                        src="https://scontent.fzag4-1.fna.fbcdn.net/v/t31.0-8/13482884_930283777126878_9056590870381103894_o.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=5VscMpBqR6EAX8ozfhy&_nc_ht=scontent.fzag4-1.fna&oh=f0001b654a1e09199e3e4c3f30213252&oe=5F94C3F5"
                        title="Unique places"
                        description="Places that are more than just a sleep"
                    />
                </div>
                <div onClick={() => history.push('/searchRooms')} >
                    <Card 
                        src="https://www.essentialhome.eu/inspirations/wp-content/uploads/2019/01/capa-740x560.png"
                        title="Apartments and rooms"
                        description="Cosy and spacious places to relax"
                    />
                </div>
                <div onClick={() => history.push('/searchHomes')} >
                    <Card 
                        src="https://scontent.fzag4-1.fna.fbcdn.net/v/t1.0-9/120195775_2367852143370027_5572525281154790281_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=gB9FHpzTwe0AX92AOQx&_nc_ht=scontent.fzag4-1.fna&oh=9683960f7c894e913fe1815c488020b2&oe=5F942AC1"
                        title="Entire Homes"
                        description="Private homes for you and your family"
                    />
                </div>
            </div>
            <h1>Selected apartments</h1>
            <div className="home__section">
                <Card 
                    src="https://www.brickunderground.com/sites/default/files/styles/blog_primary_image/public/blog/images/190311LowerEastSidePic1.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="$350/night"
                />

                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 bedroom apartment"
                    description="Superhost with great amenities and fabolous neighbourhood"
                    price="$100/night"
                />

                <Card 
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 bedroom flat in Bournemouth"
                    description="Superhost with stunning view of the beachside"
                    price="$170/night"
                />
            </div>
        </div>
    )
}

export default Home
