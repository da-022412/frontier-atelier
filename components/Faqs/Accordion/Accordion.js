import AccordionItem from './AccordionItem';

const Accordion = ({ items }) => {
    return items.map(({ title, copy }, index) => (
        <AccordionItem title={title} copy={copy} key={index} />
    ));
};

export default Accordion;
