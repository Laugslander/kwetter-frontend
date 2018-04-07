import {BaseEntity} from "./base-entity";
import {User} from "./user";
import {Topic} from "./topic";

export class Message extends BaseEntity {

  public text: String;
  public author: User;
  public likes: User[];
  public mentions: User[];
  public topics: Topic[];

}
