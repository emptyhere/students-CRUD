import React from 'react';
import Service from '../../Services/Services';
import AddSub from '../AddSub/AddSub';


export default class SubList extends React.Component{

    service = new Service();

    state = {
        itemList: null
    };

    

    createItemData(title) {
        let genId = this.state.itemList.length;
        return{
            id:++genId,
            title
        };
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

    addItm = (title) => {
        this.setState(({ itemList }) => {
        
            const newArrSec = [...itemList
                .concat(this.createItemData(title))
            ];
        
            return{
                itemList:newArrSec
             };
            });
           };

    renderItems(data){
      
        if (data !== null){
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
            <div>
                <ul>
                   {this.renderItems(itemList)}
                </ul>

                <AddSub onAdd={this.addItm} 
                itmText={'title'}
                />
            </div>
        );
    }
} 