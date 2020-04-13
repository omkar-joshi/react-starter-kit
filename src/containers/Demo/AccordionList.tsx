import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

interface IAccordionProps {
  listData: DemoData[];
}

const AccordionList: React.FC<IAccordionProps> = ({ listData }) => {
  return (
    <Accordion>
      {listData.map(listItem => (
        <Card key={listItem.id}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={`${listItem.id}`}>
              {listItem.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={`${listItem.id}`}>
            <Card.Body>{listItem.body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default AccordionList;
