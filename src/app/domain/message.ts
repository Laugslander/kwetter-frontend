import {BaseEntity} from "./base-entity";
import {User} from "./user";
import {Topic} from "./topic";

export class Message extends BaseEntity {

  constructor(public id: Number,
              public timestamp: Date,
              public text: String,
              public author: User,
              public likes: User[],
              public mentions: User[],
              public topics: Topic[]) {

    super(id, timestamp);
  }

}
