import React, {Component} from 'react';
import stacks from '../data/stacks.json';

class StackList extends Component {
    render() {
        return (
            <div>
                {stacks.map(stack => {
                  return(
                      <h4>{stack.title}</h4>
                  )
                })
                }
            </div>
        )
    }
}

export default StackList;