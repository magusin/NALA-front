export const RESET_COMMENT_FIELDS = 'RESET_COMMENT_FIELDS';
export const resetCommentFields = () => ({
  type: RESET_COMMENT_FIELDS,  
});

export const WRITE_NEW_COMMENT = 'WRITE_NEW_COMMENT';
export const writeNewComment = (text) => ({
  type: WRITE_NEW_COMMENT,
  text:text,
});

