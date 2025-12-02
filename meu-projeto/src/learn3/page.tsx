import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

// Schema de validação com Zod - define a estrutura e regras de validação do formulário
const userFormSchema = z.object({
    firstName: z.string().min(1, "Nome é obrigatório"), // string obrigatória com pelo menos 1 caractere
    email: z.string().email("Email inválido"), // valida formato de email
    profileUrl: z.string().url("URL inválida").optional().or(z.literal("")), // URL opcional, pode ser vazia
    age: z.number().min(18, "Idade mínima é 18 anos").nullable(), // número com valor mínimo ou null
    friends: z.array(z.object({ // array de objetos com validação para cada item
        name: z.string().min(1, "Nome do amigo é obrigatório")
    })),
    settings: z.object({ // objeto aninhado para configurações
        isSubscribed: z.boolean(),
    }),
});

// z.infer extrai o tipo TypeScript do schema Zod automaticamente
type UserForm = z.infer<typeof userFormSchema>;

// Exemplo de objeto que poderia ser validado com o schema:
// const user: User = { 
//     firstName: "John",
//     email: "john@example.com",
//     // profileUrl: "https://example.com/john",
//     age: null,
//     friends: ["Alice", "Bob"],
//     settings: {
//         isSubscribed: true,
//     }
// };
// console.log(userSchema.safeParse(user));



export default function Learn3() {
    // useForm: hook principal do React Hook Form
    const { 
        register, // função para registrar inputs no formulário
        handleSubmit, // wrapper para função de submit com validação automática
        control, // objeto de controle necessário para useFieldArray
        formState: { errors, isSubmitting } // estado do formulário (erros e se está enviando)
    } = useForm<UserForm>({
        resolver: zodResolver(userFormSchema), // integra Zod para validação
        defaultValues: { // valores iniciais dos campos
            firstName: "",
            email: "",
            profileUrl: "",
            age: null,
            friends: [{ name: "" }], // inicia com um amigo vazio
            settings: {
                isSubscribed: false,
            }
        }
    });

    // useFieldArray: hook para gerenciar arrays dinâmicos no formulário (adicionar/remover itens)
    const { fields, append, remove } = useFieldArray({
        control, // vincula ao controle do useForm
        name: "friends" // nome do campo array no schema
    });

    // Função de submit - só é chamada se a validação passar
    const onSubmit: SubmitHandler<UserForm> = async (data) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // simula delay de API
            console.log("Dados válidos:", data);
            alert("Formulário enviado com sucesso! Veja o console.");
        } catch (error) {
            console.error("Erro ao enviar:", error);
        }
    };

    // function handleSubmit(data: UserForm) {
    //     const result = userFormSchema.safeParse(data);

    //     if (result.success) {
    //         console.log("Valid data:", result.data);
    //     }else{
    //         console.log("deu erro patrão", result.error)
    //     }
    // }
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Learn 3 - Formulário Completo com Zod</h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-2xl">
                {/* Campo de texto simples com validação obrigatória */}
                <div>
                    <label className="block mb-1">Nome:</label>
                    <input
                        {...register("firstName")} // registra o campo no formulário
                        type="text"
                        placeholder="Seu nome"
                        className="w-full p-2 border rounded"
                    />
                    {/* Exibe mensagem de erro se houver */}
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1">Email:</label>
                    <input
                        {...register("email")}
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full p-2 border rounded"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Profile URL (opcional) */}
                <div>
                    <label className="block mb-1">URL do Perfil (opcional):</label>
                    <input
                        {...register("profileUrl")}
                        type="url"
                        placeholder="https://exemplo.com/perfil"
                        className="w-full p-2 border rounded"
                    />
                    {errors.profileUrl && (
                        <p className="text-red-500 text-sm mt-1">{errors.profileUrl.message}</p>
                    )}
                </div>

                {/* Campo numérico - valueAsNumber converte string para number */}
                <div>
                    <label className="block mb-1">Idade:</label>
                    <input
                        {...register("age", { valueAsNumber: true })} // converte automaticamente para número
                        type="number"
                        placeholder="18+"
                        className="w-full p-2 border rounded"
                    />
                    {errors.age && (
                        <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                    )}
                </div>

                {/* Array dinâmico - useFieldArray permite adicionar/remover itens */}
                <div>
                    <label className="block mb-2 font-semibold">Amigos:</label>
                    {/* Mapeia os campos do array - cada field tem um id único */}
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex gap-2 mb-2">
                            <input
                                {...register(`friends.${index}.name`)} // acessa campo específico do array
                                type="text"
                                placeholder="Nome do amigo"
                                className="flex-1 p-2 border rounded"
                            />
                            <button
                                type="button"
                                onClick={() => remove(index)} // remove item do array
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Remover
                            </button>
                        </div>
                    ))}
                    {/* Erro geral do array */}
                    {errors.friends && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.friends.message || errors.friends.root?.message}
                        </p>
                    )}
                    {/* Erros individuais de cada item do array */}
                    {fields.map((_, index) => 
                        errors.friends?.[index]?.name && (
                            <p key={index} className="text-red-500 text-sm">
                                Amigo {index + 1}: {errors.friends[index]?.name?.message}
                            </p>
                        )
                    )}
                    <button
                        type="button"
                        onClick={() => append({ name: "" })} // adiciona novo item ao array
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        + Adicionar Amigo
                    </button>
                </div>

                {/* Settings - Checkbox */}
                <div>
                    <label className="flex items-center gap-2">
                        <input
                            {...register("settings.isSubscribed")}
                            type="checkbox"
                        />
                        <span>Inscrever-se na newsletter</span>
                    </label>
                </div>

                {/* Botão Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
                >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
            </form>
        </div>

);
}