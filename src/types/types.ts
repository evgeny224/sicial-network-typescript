
    export  type dialogItemDataType = {
        id: number
        name: string
        avatar: string
    }

    export  type messagesDataType = {
        id: number
        message: string
    }

    export  type postsDataType = {
        id: number
        message: string
        likesCount: number
    }


    export  type contactsType = {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }

    export   type photosType = {
        small: string | null
        large: string | null
    }


    export   type profileType = {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: contactsType
        photos: photosType
    }

    export  type friendsDataType = {
        id: number
        foto: string
        name: string
    }

    export type UsersType = {
        count: number
        page: number
        term: string
        friend: boolean
    }