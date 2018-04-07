import {BaseEntity} from "./base-entity";
import {Message} from "./message";
import {Account} from "./account";

export class User extends BaseEntity {

  public name: String;
  public avatar: String;
  public location: String;
  public website: String;
  public bio: String;
  public account: Account;
  public followings: User[];
  public followers: User[];
  public messages: Message[];
  public liked: Message[];
  public mentioned: Message[];

}
