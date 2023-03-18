import { TypeOf, z } from 'zod';

const zod = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),

  sessionId: z.string({
    required_error: 'SessionId is required',
    invalid_type_error: 'SessionId must be string',
  }).min(1,{message:'Session ID is required'}),

  userId: z.string({
    required_error: 'UserId is required',
    invalid_type_error: 'UserId must be string',
  }).min(1,{message:'User ID is required'}),
});

export const addUsersToSessionValidate = z.object({
  body: zod.pick({ userId:true , sessionId:true , }),
});

export const deleteUserInSessionValidate = z.object({
  params: zod.pick({ userId:true , sessionId:true}),
});


export type addUsersToSession = TypeOf<typeof addUsersToSessionValidate>['body'];
export type deleteUserInSession = TypeOf<typeof deleteUserInSessionValidate>['params'];
