import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
interface IAccordionProps {
  listData: DemoData[];
}

const AccordionList: React.FC<IAccordionProps> = ({ listData }) => {
  const renderList = listData.map(listItem => (
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
  ));

  return <Accordion>{renderList}</Accordion>;
};

export default AccordionList;
