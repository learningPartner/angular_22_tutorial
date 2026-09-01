import { CommentDTO, IComment } from "../models/user.model";

function getFormatedCardNo(cardNo: string) {
    debugger;
    const astrticDat = '**** **** **';
    return astrticDat + ' ' + cardNo.substring(10);
}

function toUserMapping (comment: CommentDTO) : IComment {
    return  {
        body: comment.body,
        userEmail: comment.email,
        userId: comment.id,
        userName: comment.name,
        userPostId: comment.postId
    }
}

export {getFormatedCardNo, toUserMapping}

