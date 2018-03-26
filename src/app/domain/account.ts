import {BaseEntity} from "./base-entity";

export class Account extends BaseEntity {

  constructor(public id: Number,
              public timestamp: Date,
              public username: String,
              public password: String,
              public role: String) {

    super(id, timestamp);
  }

}
