export const getFriendsByPage = ({
                                   friendsById,
                                   pageNo, pageSize
                                 }) => friendsById.slice((pageNo - 1) * pageSize, pageNo * pageSize);
