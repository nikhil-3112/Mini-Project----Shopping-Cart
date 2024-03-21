import React from 'react';

class CartItem extends React.Component {
    render() {
        console.log("this.props", this.props);
        const { title, price, qty} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style = {styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style = { { fontSize:25}}>Title: {title}</div>
                    <div style = { { color:'#777'}}>Price: {price}</div>
                    <div style = { { color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        // onClick={this.increaseQuantity}
                        src="https://cdn-icons-png.flaticon.com/512/262/262038.png" 
                        onClick={() => this.props.onIncreaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        onClick={this.decreaseQuantity}
                        src="https://cdn-icons-png.flaticon.com/512/659/659892.png" 
                        />
                        <img alt="delete" 
                        className="action-icons" 
                        onClick={this.removeItem}
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
