import { TypeOf, z } from 'zod';

const zod = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),

  sessionId: z.string({
    required_error: 'SessionId is required',
    invalid_type_error: 'SessionId must be string',
  }),

  userId: z.string({
    required_error: 'UserId is required',
    invalid_type_error: 'UserId must be string',
  }),
});

export const addUsersToSessionValidate = z.object({
  body: zod.pick({ userId:true , sessionId:true , }),
});

export const deleteUserInSessionValidate = z.object({
  body: zod.pick({ userId:true}),
});


export type addUsersToSession = TypeOf<typeof addUsersToSessionValidate>['body'];
export type deleteUserInSession = TypeOf<typeof deleteUserInSessionValidate>['body'];
