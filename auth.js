
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createUser, getUsers } from "./app/lib/apiServices"

export const {
  handlers,
  signIn,
  signOut, auth
} = NextAuth({
  providers: [Google],

  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user
    },

    async signIn({ user }) {
      try {
        const existingUser = await getUsers(user.email)

        if (!existingUser) {
          await createUser({
            name: user.name, email: user.email
          })
        }

        return true
      } catch (error) {
        return false
      }
    },

    async session({ session }) {
      const user = await getUsers(session.user.email)
      session.user.id = user.id
      return session
    }
  },

  pages: {
    signIn: 'login',
    signOut: '/logout'
  }
})