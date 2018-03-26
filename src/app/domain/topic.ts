import {BaseEntity} from "./base-entity";
import {Message} from "./message";

export class Topic extends BaseEntity {

  constructor(public id: Number,
              public timestamp: Date,
              public name: String,
              public messages: Message[]) {

    super(id, timestamp);
  }

}
