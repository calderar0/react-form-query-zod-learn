import { zodResolver } from '@hookform/resolvers/zod';
import {useForm, type SubmitHandler} from 'react-hook-form';
import {z} from 'zod';

const schema = z.object({   // esse cara faz toda a validação
    email: z.string().email(),
    password: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

// type FormFields = {
//     email: string;
//     password: string;
// }

const Learn1 = () => {

const { register, 
    handleSubmit, 
    setError,
    formState: {errors, isSubmitting}
} = useForm<FormFields>({defaultValues:{
    email: "test@email.com",
    password: ""
    },
    resolver: zodResolver(schema)
});

const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); //simula delay de 1s
        // throw new Error(); //simula erro de email ja cadastrado
        console.log(data);  
    } catch (error) {
        setError("root", 
            { message: "Email already taken." });
        throw error;
    }
    
};

  return (
    <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", 
            {required: "Email is required", 
            // pattern: {
            //     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,//igual em LFA e compiladores, muito interessante
            //     message: "Invalid email format"}, 
            //validate: (value) => {
            // if (!value.includes("@")){
            // return "Email must include @";}}
            // return true} //exemplo de validação customizada bem mais simples
            })} 
            type="text" 
            placeholder="Email" 
        />

        {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}

        <input {...register("password", 
            // {required: "Password is required", 
            // minLength: {
            //     value: 6, 
            //     message: "Password must be at least 6 characters"}}
            )} 
            type="password" 
            placeholder="Password" 
        />

        {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}


        <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {errors.root && (<div className='text-red-500'>{errors.root.message}</div>)}
    </form>
  );
};


export default Learn1;