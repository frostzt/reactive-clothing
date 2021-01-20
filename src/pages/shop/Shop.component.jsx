import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component';

import Shop_Data from './Shop.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: Shop_Data,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
