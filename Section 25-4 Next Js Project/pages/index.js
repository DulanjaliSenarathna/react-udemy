

import MeetupList from '../components/meetups/MeetupList';



const DUMMY_MEETUPS = [
    {
        id:'m1',
        title:'First Meetup',
        image:'https://www.eventbrite.com/blog/wp-content/uploads/2023/02/Frame-1-5-min-1-1536x864.avif',
        address:'776/A, Rukhena Watta, Kanuggalla,Ellawala',
        description:'Before you start planning your event, you need to make a list of your trackable goals, also known as key performance indicators (KPIs). These KPIs provide a yardstick by which to measure your event’s success after everything is over. ',

    },
    {
        id:'m2',
        title:'Second Meetup',
        image:'https://www.eventbrite.com/blog/wp-content/uploads/2023/02/Frame-1-5-min-1-1536x864.avif',
        address:'776/A, Rukhena Watta, Kanuggalla,Ellawala',
        description:'Before you start planning your event, you need to make a list of your trackable goals, also known as key performance indicators (KPIs). These KPIs provide a yardstick by which to measure your event’s success after everything is over. ',
        
    }
]

function HomePage(props){

   
    return (
    
        <MeetupList meetups={props.meetups}/>
    
)
}

// export async function getServerSideProps(context){

//     const req = context.req;
//     const res= context.res;
//     // fetch data from API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export function getStaticProps(){
    // fetch data from API
    return {
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    };
}

export default HomePage;