import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-sm-6 col-lg'>
          <a href='#'>
            <FeatureBox icon={faTruck} active>
              <h5>Free shipping</h5>
              <p>All orders</p>
            </FeatureBox>
          </a>
        </div>
        <div className='col-12 col-sm-6 col-lg'>
          <a href='#'>
            <FeatureBox icon={faHeadphones}>
              <h5>24/7 customer</h5>
              <p>support</p>
            </FeatureBox>
          </a>
        </div>
        <div className='col-12 col-sm-6 col-lg'>
          <a href='#'>
            <FeatureBox icon={faReplyAll}>
              <h5>Money back</h5>
              <p>guarantee</p>
            </FeatureBox>
          </a>
        </div>
        <div className='col-12 col-sm-6 col-lg'>
          <a href='#'>
            <FeatureBox icon={faBullhorn}>
              <h5>Member discount</h5>
              <p>First order</p>
            </FeatureBox>
          </a>
        </div>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
