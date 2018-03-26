import {BaseEntity} from "./base-entity";
import {Message} from "./message";

export class User extends BaseEntity {

  constructor(public id: Number,
              public timestamp: Date,
              public name: String,
              public avatar: String,
              public location: String,
              public website: String,
              public bio: String,
              public account: Account,
              public followings: User[],
              public followers: User[],
              public liked: Message[],
              public mentioned: Message[]) {

    super(id, timestamp);
  }

}
