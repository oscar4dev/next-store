import { supabase } from "./supabase";

export async function getProducts () {
   const { data, error } = await supabase
   .from('products')
   .select('*')
        
   if (error) {
      console.log(error);
      throw new Error('Unable to fetch data')
   }

   return data
}

export async function getProduct (id) {
   const { data, error } = await supabase
   .from('products')
   .select('*')
   .eq('id', id)
   .single()
        
   if (error) {
      console.log(error);
      throw new Error('Unable to fetch data')
   }
   
   return data
}

export async function getCart () {
   
   const { data, error } = await supabase
   .from('cart')
   .select('*')
      
   if (error) {
      throw new Error("Unable to get cart");
   }

   return data
}

export async function getOrders () {
   
   let { data, error } = await supabase
   .from('order')
   .select('*')
   
   if (error) {
      console.error('Error occured', error.message)
   }

   return data
}