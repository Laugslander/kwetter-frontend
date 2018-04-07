import {BaseEntity} from "./base-entity";
import {Message} from "./message";

export class Topic extends BaseEntity {

  public name: String;
  public messages: Message[];

}
