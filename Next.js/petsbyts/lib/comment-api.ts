import { Comment } from "../interface";
import { AddCommentMessage, GetCommentsMessage } from "../interface/response";



const serverAddress = "http://127.0.0.1:3000";

export async function addComment(comment: Comment) {
  let endpoint = serverAddress + "/api/comment/" + comment.target;
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: { "Content-type": "application/json" },
  });
  const data: AddCommentMessage = await response.json();
  return data;
}

export async function getComments(target: string) {
  let endpoint = serverAddress + "/api/comment/" + target;
  const response = await fetch(endpoint, { method: "GET" });
  const data: GetCommentsMessage = await response.json();

  return data;
}
