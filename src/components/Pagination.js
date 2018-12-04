import React, {PropTypes} from 'react';
import classnames from 'classnames';
import styles from './Pagination.css';

const Pagination = ({
                        pageNo,
                        totalFriends,
                        pageSize,
                        actions: {
                            nextPage,
                            prevPage
                        }
                    }) =>(
      <div className={styles.paginationContainer}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => prevPage({totalFriends, pageSize})}>
            Prev
          </button>
          <div>{pageNo}</div>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => nextPage({totalFriends, pageSize})}>
            Next
          </button>
        </div>
);

Pagination.propTypes = {
    pageNo: PropTypes.number.isRequired,
    totalFriends: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
};

export default Pagination;
