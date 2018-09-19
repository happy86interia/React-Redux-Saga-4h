import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import actions from '../actions';
import Filter from './filter';
import ProductsList from './productsList';
import { HomeWrapper } from './home.style.js';

const { getColors, getCategories, getProducts } = actions;

class Home extends React.Component {
  constructor(props) {
    super(props);

    props.getColors();
    props.getCategories();
    props.getProducts();
  }

  render() {
    const { colors, products } = this.props;

    return (
      <HomeWrapper>
        <Grid className="contentWrapper" container justify="center" spacing={16}>
          <Grid id="homeContent" item xs={12} >
            <Filter
              colors={colors}
            />
            <ProductsList
              products={products}
            />
          </Grid>
        </Grid>
      </HomeWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
    categories: state.categories,
    products: state.products
  };
}

export default connect(mapStateToProps, {
  getColors,
  getCategories,
  getProducts
})(Home);
