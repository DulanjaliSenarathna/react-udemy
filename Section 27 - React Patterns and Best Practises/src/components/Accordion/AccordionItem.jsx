import { useAccordionContext } from "./Accordion.jsx"

export default function AccordionItem({id,className,title, children}){

   const {openItemId, openItem, closeItem} = useAccordionContext();

   function handleClick(){
    if(isOpen){
        closeItem();
    }else{
        openItem(id);
    }
   }

    const isOpen = openItemId === id
    return <li className={className}>
        <h3 onClick={handleClick}>{title}</h3>
        <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>
            {children}
        </div>
    </li>
}