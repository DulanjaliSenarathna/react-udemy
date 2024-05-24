import { useAccordionContext } from "./Accordion"
import { useAccodionItemContext } from "./AccordionItem";

export default function AccordionContent({children,className}){

   const {openItemId,} = useAccordionContext();
   const id = useAccodionItemContext();

   const isOpen = openItemId ===id;
    return (<div className={isOpen ? `${className ?? ''} open`  : `${className ?? ''} close` }>
    {children}
</div>)
}