import { TypeOf, z } from 'zod';

const zod = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be string',
  }),
  title: z
    .string({
      required_error: 'Title  is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1, 'The title must not be empty'),

  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    })
    .max(250, 'Description can have at most 250 characters'),

  deadline: z.date({
    required_error: 'Deadline is required',
    invalid_type_error: 'Deadline must be a date',
  }),

  assignById: z.string({
    required_error: 'AssignById is required',
    invalid_type_error: 'AssignById must be string',
  }),

  status: z.enum(['TODO', 'INPROGRESS', 'COMPLETED'], {
    required_error: 'Status is required',
  }),

  assignToId: z.string({
    required_error: 'AssignToId is required',
    invalid_type_error: 'AssignToId must be string',
  }),

  sessionId: z.string({
    required_error: 'SessionId is required',
    invalid_type_error: 'SessionId must be string',
  }),
});

export const addTaskValidate = z.object({
  body: zod.pick({title:true , description:true , assignToId:true , sessionId:true}),
});

export const updateTaskValidate = z.object({
  body: zod.pick({ id: true, description: true, status: true }),
});

export const deleteTaskValidate = z.object({
  body: zod.pick({ id: true, }),
});

export type addTask = TypeOf<typeof addTaskValidate>['body'];
export type updateTask = TypeOf<typeof updateTaskValidate>['body'];
export type deleteTask = TypeOf<typeof deleteTaskValidate>['body'];
