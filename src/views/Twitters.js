import React from 'react';
import { connect } from 'react-redux';
import UserPageTemplate from 'templates/UserPageTemplate';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
    <GridTemplate itemsLength={twitters.length}>
        {twitters.map(item => (
            <Card
                key={item.id}
                {...item}
            />
        ))}
    </GridTemplate>
);

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
