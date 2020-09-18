import React, {Component} from 'react';
import stacks from '../data/stacks.json';
import {Link} from 'react-router-dom';

class StackList extends Component {
    render() {
        return (
            <div>
                {stacks.map(stack => {
                    return (
                        <Link to='/stack'>
                            <h4 key={stack.id}>{stack.title}</h4>
                        </Link>
                    )
                })
                }
            </div>
        )
    }
}

export default StackList;