import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

export default class ProductSingle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: props.product.colors[0]
    };
  }

  handleChange = color => {
    this.setState({
      color
    })
  }

  render() {
    const { product } = this.props;
    const priceIndex = product.colors.indexOf(this.state.color);

    return (
      <GridListTile key={product.id} className="productWrapper">
            <img
              src={`/images/${product.category}-${product.id}-${this.state.color}.png`}
              alt={product.name}
            />
            <GridListTileBar
              className="productItem"
              title={product.name}
              subtitle={`${product.prices[priceIndex]} zł`}
              actionIcon={
                <div className="colorSwitcherWrapper">
                  {product.colors.map((color, index) => {
                    return (
                      <IconButton
                        key={index}
                        onClick={() => this.handleChange(color)}
                      >
                        <img
                          alt="color"
                          src={`/images/color-${color}.png`}
                        />
                      </IconButton>
                    );
                  })}
                </div>
              }
            />
        </GridListTile>
    );
  }
}
