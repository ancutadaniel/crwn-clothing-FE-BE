import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { collectionFetch } from '../../redux/shop-reducer/shop.selector';
import Spinner from '../spinner/spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: collectionFetch,
});

/* two level of HOC wrapping - Spinner wrap Collection,
    connect wrap Spinner to pass isLoading props
*/

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
