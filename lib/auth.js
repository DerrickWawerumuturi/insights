import { account, OAuthProvider } from "./appwrite"
import { parseStringify } from "./utils";


export const loginWithGoogle = async () => {
    try {
        await account.createOAuth2Session(OAuthProvider.Google,
            process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/",
            `${process.env.NEXT_PUBLIC_APP_URL}/sign-in` || "http://localhost:3000/sign-in"
        )
    } catch (error) {
        console.log("error logging in with Google", error)
    }
}


export const logoutUser = async () => {
    try {
        await account.deleteSession("current")
    } catch (error) {
        console.log("Could not log out with Google", error)
    }
}

export const getUser = async () => {
    try {
        const user = await account.get()
        return parseStringify(user)
    } catch (error) {
        console.log("Error getting user", error)
    }

}