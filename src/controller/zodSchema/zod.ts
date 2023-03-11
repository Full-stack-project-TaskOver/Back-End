import {TypeOf, z} from 'zod'


 const zod = z.object({
   
        name: z.string({
            required_error: "name is required",
            invalid_type_error: "Name must be a string"
        })
        ,
        email: z.string({
            required_error: "Email  is required",
            invalid_type_error: "you must write a valid email "
        })
        .email(),

        password: z.string({
            required_error: "Password  is required",
            invalid_type_error: "Password is required"
        }),
        phone: z.number({
            invalid_type_error: "you must write a valid number "
        }),
            title: z.string({
                required_error: "Title  is required",
                invalid_type_error: "Title must be a string"
            })
            .min(1,"The title must not be empty"),
            description: z.string({
                invalid_type_error: "Description must be a string" 
            })
    })


export const signUpValidate = z.object({
    body: zod.pick({name: true, email: true, password: true})
  });
  export const signInValidate = z.object({
      body: zod.pick({ email: true, password: true})
    });
  export const taskValidate = z.object({
      body: zod.pick({ title: true, description: true})
    });
  
export type createSignUp = TypeOf<typeof signUpValidate>["body"]
export type createSignIn = TypeOf<typeof signInValidate>["body"]
export type createTask = TypeOf<typeof taskValidate>["body"]