import React, {Component} from 'react';
import styles from './FriendListApp.css';
import {connect} from 'react-redux';
import size from "lodash/size";
import {addFriend, deleteFriend, starFriend, prevPage, nextPage, updateSex} from '../actions';
import {AddFriendInput, FriendList, Pagination} from '../components';
import {getFriendsByPage} from "../selectors/FriendsByPage";

export class FriendListApp extends Component {

  render() {
    const {
      friendlist: {friendsById}, addFriend, deleteFriend, starFriend, updateSex,
      nextPage, prevPage,
      page: {
        pageNo
      }
    } = this.props;
    const pageSize = 2;
    const totalFriends = size(friendsById);
    const friendActions = {
      addFriend,
      deleteFriend,
      starFriend,
      updateSex
    };
    const friendsByPage = getFriendsByPage({friendsById, pageNo, pageSize});
    const pageActions = {
      nextPage,
      prevPage
    };
    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={friendActions.addFriend}/>
        <FriendList friends={friendsByPage} actions={friendActions}/>
        <Pagination pageNo={pageNo} totalFriends={totalFriends}
                    pageSize={pageSize} actions={pageActions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  nextPage,
  prevPage,
  updateSex
})(FriendListApp)
