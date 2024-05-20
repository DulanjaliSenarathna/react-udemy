import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return  <MeetupDetail 
    image="https://www.eventbrite.com/blog/wp-content/uploads/2023/02/Frame-1-5-min-1-1536x864.avif" 
    title='First Meetup'
    address='776/A, Rukhena Watta, Kanuggalla,Ellawala'
    description='Before you start planning your event, you need to make a list of your trackable goals'/>
}

export async function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            {params:{
                meetupId:'m1'
            }},
            {params:{
                meetupId:'m2'
            }}
        ]
    }
}

export async function getStaticProps(context){
    // fetch data for single meetup

    const meetupId = context.params.meetupId;

    return {
        props:{
            meetupData:{
                id: meetupId,
                image: "https://www.eventbrite.com/blog/wp-content/uploads/2023/02/Frame-1-5-min-1-1536x864.avif",
                title: 'First Meetup',
                address: '776/A, Rukhena Watta, Kanuggalla,Ellawala',
                description: 'Before you start planning your event, you need to make a list of your trackable goals'
            }
        }
    }
}
export default MeetupDetails;