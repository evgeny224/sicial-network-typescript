

    export const getUsers = (state) => {
        return state.usersPage.users;
    }

    export const getUsersCounts = (state) => {
        return state.usersPage.totalUsersCounts;
    }

    export const getPageSize = (state) => {
        return state.usersPage.pageSize;
    }

    export const getCurrentPage = (state) => {
        return state.usersPage.currentPage;
    }

    export const getIsFetching = (state) => {
        return state.usersPage.isFetching;
    }

    export const getisFollowingInProgres = (state) => {
        return state.usersPage.isFollowingInProgres;
    }