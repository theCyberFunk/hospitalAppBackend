// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'date',
  })
  dob?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  messages?: object[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  appointments?: object[];

  @property({
    type: 'string',
  })
  image?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
