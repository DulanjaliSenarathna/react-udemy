import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';
import Place from "./components/Place.jsx";

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];


function App() {
  return <main>
    <section>
      <h2>Why Work with us?</h2>
      <Accordion className='accordion'>
        <Accordion.Item id='new' className='accordion-item'>
          <Accordion.Title className="accordion-item-title">We got 20 years of experience</Accordion.Title>
          <Accordion.Content  className="accordion-item-content">
          <article>
            <p>You can not go wrong with us</p>
            <p>We are in the business Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus dolorem numquam aspernatur neque expedita placeat maxime eius, at perferendis inventore ipsam quis! Reiciendis vitae assumenda sapiente nostrum maiores sequi.</p>
          </article>
          </Accordion.Content>
          
        </Accordion.Item>
        <Accordion.Item id='second'   className='accordion-item'>
          <Accordion.Title className="accordion-item-title">lorem ipsum</Accordion.Title>
          <Accordion.Content className="accordion-item-content">
          <article>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus dolorem numquam aspernatur neque expedita placeat maxime eius, at perferendis inventore ipsam quis! Reiciendis vitae assumenda sapiente nostrum maiores sequi.</p>
          </article>
          </Accordion.Content>
          
        </Accordion.Item>
      </Accordion>
    </section>

    <section>
      <SearchableList itemKeyFn={(item)=> item.id} items={PLACES}>
        {(item)=> <Place item={item}/>}
      </SearchableList>
      <SearchableList itemKeyFn={(item)=> item} items={['place1','place2']}>
        {(item)=> item}
        </SearchableList> 
    </section>
  </main>;
}

export default App;
