import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { collectionIsLoading } from '../../redux/shop-reducer/shop.selector';
import Spinner from '../../components/spinner/spinner.component';
import CollectionPage from './collection.component';

/*
is important that name isLoading to be the same
as prop in collection page spinner
*/
const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !collectionIsLoading(state),
  // for switch bool from true to false
});

/* two level of HOC wrapping - Spinner wrap CollectionPage,
    connect wrap Spinner to pass isLoading props
*/

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionPage);

export default CollectionPageContainer;
