'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
// import { signinSchema } from '@/validations/validation'

// export async function login(data: { email: string, password: string }) {
//     const supabase = await createClient()
//     const { success, error } = signinSchema.safeParse(data);
//     if (!success) {
//         console.log(error);
//         return;
//     }
//     // const data = {
//     //     email: formData.get('email') as string,
//     //     password: formData.get('password') as string,
//     // }
//     const { error: signInError } = await supabase.auth.signInWithPassword(data)
//     if (signInError) {
//         console.log(signInError);
//         return
//     }

//     revalidatePath('/', 'layout')
//     redirect('/dashboard');
// }

// export async function signup(formData: FormData) {
//     const supabase = await createClient()
//     const data = {
//         email: formData.get('email') as string,
//         password: formData.get('password') as string,
//     }

//     const { error } = await supabase.auth.signUp(data)

//     if (error) {
//         redirect('/error')
//     }

//     revalidatePath('/', 'layout')
//     redirect('/')
// }

export async function signout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    revalidatePath('/', 'layout');
    redirect('/');
}