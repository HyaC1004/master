export interface Message {
  result: boolean;
  error?: string;
}
export interface AddCommentMessage extends Message {
  comment: Comment;
}
export interface GetCommentsMessage extends Message {
  commments: Comment[];
}
