export interface CommentDTO {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IComment {
    userPostId: number;
    userId: number;
    userEmail: string;
    userName: string;
    body: string;
}
