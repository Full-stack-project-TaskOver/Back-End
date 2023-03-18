import { TypeOf, z } from 'zod';

const zod = z.object({
  name: z
    .string({
      required_error: 'name is required',
      invalid_type_error: 'Name must be a string',
    })
    .min(1, 'Name is required')
    .max(20, 'Name cant be more than 20 characters'),

  email: z
    .string({
      required_error: 'Email  is required',
      invalid_type_error: 'you must write a valid email ',
    }).min(1 , 'Email  is required').email(),

  password: z
    .string({
      required_error: 'Password  is required',
      invalid_type_error: 'Password is invaild',
    })
    .min(8, 'Password must have at least 8 characters')
    .max(25, 'Password can have at most 25 characters'),

  phone: z
    .number({
      invalid_type_error: 'you must write a valid number ',
    })
    .max(10, 'Phone must have 10 characters'),
});

export const signUpValidate = z.object({
  body: zod.pick({ name: true, email: true, password: true }),
});

export const signInValidate = z.object({
  body: zod.pick({ email: true, password: true }),
});

export const forgotPassValidate = z.object({
  body: zod.pick({ email: true, password: true }),
});

export const updateUserValidate = z.object({
  body: zod.pick({ name: true, phone: true }),
});

export type createSignUp = TypeOf<typeof signUpValidate>['body'];
export type createSignIn = TypeOf<typeof signInValidate>['body'];
export type updateUser = TypeOf<typeof updateUserValidate>['body'];
export type forgotPass = TypeOf<typeof forgotPassValidate>['body'];
