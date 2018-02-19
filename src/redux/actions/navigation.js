const CHANGE_PAGE = 'CHANGE_PAGE';

const changePage = (page, currentNote) => ({
  type: CHANGE_PAGE,
  payload: { page, currentNote },
});

export { CHANGE_PAGE, changePage };
