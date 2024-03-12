import React from 'react';

class CartItem extends React.Component {
    constructor () {
        super()
        this.state = {
            price: 999,
            title: "Phone",
            Qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    increaseQuantity= () => {
        console.log('this',this.state);

        this.setState((prevState) => {
            return {
                Qty: prevState.Qty + 1
            }
        })
    }

    render() {
        const { title, price, Qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image}  />
                </div>
                <div className="right-block">
                    <div style = { { fontSize:25}}>Title: {title}</div>
                    <div style = { { color:'#777'}}>Price: {price}</div>
                    <div style = { { color:'#777'}}>Qty: {Qty}</div>
                    <div class="cart-item-actions">
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        onClick={this.increaseQuantity}
                        src="https://cdn-icons-png.flaticon.com/512/262/262038.png" 
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/659/659892.png" 

                        />
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://cdn.icon-icons.com/icons2/2249/PNG/512/delete_circle_outline_icon_139695.png" 

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
      width: 110,
      height: 110,
      borderRadius: 4,
      background: '#ccc'
    }
}

export default CartItem;
