import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
    <GridTemplate cardType="notes" itemsLength={notes.length}>
        {notes.map(item => (
            <Card
                cardType="notes"
                key={item.id}
                {...item}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);

