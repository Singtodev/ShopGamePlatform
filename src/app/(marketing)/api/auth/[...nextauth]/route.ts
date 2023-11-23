import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Username" , type: "text"},
                password: {label: "Password" , type: "password"}
            },
            async authorize(credentials){

                console.log(credentials);

                const res = await fetch('https://www.melivecode.com/api/login',{
                    method: "post",
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type' : 'application/json'}
                })

                const response = await res.json();
                console.log(response);

                if(response.status === 'ok'){
                    return response.user;
                }

                return null;
            }

        })
    ],
    pages: {
        'signIn': '/login',
        'error': '/not_found'
    }
})

export { handler as GET , handler as POST };