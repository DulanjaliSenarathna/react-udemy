import Accordion from "./components/Accordion/Accordion.jsx";


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
  </main>;
}

export default App;
