import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite"

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.levelp.nidoho",
    projectId: "673b0721003449295991",
    databaseId: "673b79c400017388fb50",
    userCollectionId: "673b79e90003cecb36c1",
    houseCollection: "673b7a260013e85bc1da",
    storageId: "673b84dc0030dc56d9f6"
}

const { endpoint, platform, projectId, databaseId, userCollectionId, houseCollection, storageId} = appwriteConfig

// const avatar = 
const client = new Client()

client
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setPlatform(platform)

const account = new Account(client)
const avatar = new Avatars(client)
const storage = new Storage(client)
const database = new Databases(client)

export const createUser = async (username, email, password, agentId) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error

        const avatarUrl = avatar.getInitials(username)

        await signIn (email, password)

        const newUser = await database.createDocument(
            databaseId,
            userCollectionId,
            ID.unique(),
            {
                username,
                email,
                avatar: avatarUrl,
                accountId: newAccount.$id,
                agentId
            }
        )

        return newUser
    } catch (error) {
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session
    } catch (error) {
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()

        if(!currentAccount) throw Error

        const currentUser = await database.listDocuments(
            databaseId,
            userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (error) {
        throw new Error(error)
    }
}