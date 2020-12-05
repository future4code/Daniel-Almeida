import { CustomError } from '../errors/CustomError';

enum POST_TYPES {
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}

export class Post {
  private type: POST_TYPES
  constructor(
      private id: string,
      private photo: string,
      private description: string,
      type: string,
      private createdAt: string,
      private authorId: string,
    ) {
      if(type.toUpperCase() === POST_TYPES.NORMAL){
        this.type = POST_TYPES.NORMAL
      } else if (type.toUpperCase() === POST_TYPES.EVENT){
        this.type = POST_TYPES.EVENT
      } else {
        throw new CustomError(406, "Insert a valid type: 'normal' or 'event'")
      }
    }
    public getId = () => this.id
    public getPhoto = () => this.photo
    public getDescription = () => this.description
    public getType = () => this.type
    public getCreatedAt = () => this.createdAt
    public getAuthorId = () => this.authorId
    public setType(type: POST_TYPES){
      this.type = type
      return this
   }
 }

export interface CreatePostInput {
   photo: string,
   description: string,
   type: string,
   token: string
}

export interface GetPostByIdInput {
  id: string,
  token: string
}

export function postTypeToString(type: POST_TYPES): string {
  if (type === "EVENT"){
    return "EVENT";
  }
  return "NORMAL";
}