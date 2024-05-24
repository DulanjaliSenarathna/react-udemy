import { useAccordionContext } from "./Accordion"
import { useAccodionItemContext } from "./AccordionItem";

export default function AccordionTitle({children,className}){

   const {toggleItem} = useAccordionContext();
  const id = useAccodionItemContext();
    return <h3 className={className} onClick={()=> toggleItem(id)}>{children}</h3>
}