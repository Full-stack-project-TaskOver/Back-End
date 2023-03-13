import { TypeOf, z } from 'zod';

const zod = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),

  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, 'Name cant be less than 1 character'),

  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    })
    .max(250, 'Description must have at most 250 characters'),

  creatorId: z.string({
    required_error: 'CreatorId is required',
    invalid_type_error: 'CreatorId must be string',
  }),

  type: z.enum(['Personal', 'Family', 'Company', 'OpenSource'], {
    required_error: 'Type is required',
  }),
});

export const addSessionValidate = z.object({
  body: zod.pick({ title: true, type: true }),
});

export const deleteSessionValidate = z.object({
  body: zod.pick({ id: true }),
});

export const updateSessionValidate = z.object({
  body: zod.pick({ id: true, name: true, description: true, type: true }),
});

export type addSession = TypeOf<typeof addSessionValidate>['body'];
export type deleteSession = TypeOf<typeof deleteSessionValidate>['body'];
export type updateSession = TypeOf<typeof updateSessionValidate>['body'];
