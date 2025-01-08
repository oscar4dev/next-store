'use server';

import { revalidatePath } from "next/cache";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function addToCartAction (newData) {
   
   const { error } = await supabase
      .from('cart')
      .insert([ newData ])
      .select()
   
   if (error) {
      console.log(error);
   } else {
      console.log('Added Sucessfully!');
   }
   
   revalidatePath('/cart')
}

export async function deleteItem (id) {
   
   const { error } = await supabase
      .from('cart')
      .delete()
      .eq('id', id)
      
   if (error) {
      console.log('Unable to delete item', error)
   }

   revalidatePath('/cart')
}

export async function createOrder (cart, formData) {

   const rawFormData = {
      name: formData.get('fullname'),
      phone: Number(formData.get('phone')),
      email: formData.get('email'),
      priorityStatus: Boolean(formData.get('priorityStatus')),
   }
   
   const newData = {
      ...rawFormData, cart
   }
   
   const { error } = await supabase
      .from('order')
      .insert([ newData ])
      .select()
   
   if (error) {
      console.error('Error occured', error.message)
   }

   redirect('/order') 
}

export async function deleteOrder (id) {
   const { error } = await supabase
      .from('order')
      .delete()
      .eq('id', id)
        
   
   if (error) {
      console.log('Unable to delete item', error)
   }

   revalidatePath('/order')
   
}