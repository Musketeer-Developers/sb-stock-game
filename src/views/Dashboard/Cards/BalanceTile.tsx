import * as React from 'react';
import { PriceTag } from '../../../components/PriceTag';
import { StatusCard } from '../../../components/StatusCard/StatusCard';

interface BalanceTileProps {
    value: number;
}

interface BalanceTileState {
}

class BalanceTile extends React.Component<BalanceTileProps, BalanceTileState> {

    constructor( props: BalanceTileProps ) {
        super( props );
    }

    render() {
        return (
            <StatusCard
                icon={<i className="pe-7s-piggy text-success"/>}
                title="Balance"
                value={<PriceTag value={this.props.value}/>}
                noFooter={true}
            />
        );
    }
}
export default BalanceTile;