import React from 'react';
import Service from '../../Services/Services';


export default class SubList extends React.Component{

    service = new Service();

    state = {
        itemList: null
    };

    componentDidMount(){
        this.updateSub();
    };

    updateSub(){
        this.service.getCurrentSubject()
        .then((itemList)=>{
            this.setState({
                itemList,
            });
        })
    }


    renderItems(data){
      
        const {itemList} = this.state;
        if (itemList !== null){
        return data.map((item)=>{
            return(
                
            <li key={item.id}>
                {item.title}
            </li>

            );
        });
     }
    }


    render(){
        const {itemList} = this.state;

        return(
            
                <ul>
                   {this.renderItems(itemList)}
                </ul>
            
        );
    }
} 